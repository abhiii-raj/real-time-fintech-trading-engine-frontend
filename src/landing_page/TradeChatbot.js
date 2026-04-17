import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QUICK_PROMPTS = [
  'How do I place a buy order?',
  'Explain holdings vs positions',
  'What are market hours?',
  'How can I reduce trading risk?'
];

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://real-time-fintech-trading-engine-backend-5ao3.onrender.com';

function TradeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Hi, I am NiveshBot . Ask me anything about trades, holdings, positions, or market basics.'
    }
  ]);
  const [suggestions, setSuggestions] = useState(QUICK_PROMPTS);
  const navigate = useNavigate();

  const sendMessage = async (rawText) => {
    const message = String(rawText || '').trim();
    if (!message || loading) {
      return;
    }

    setMessages((prev) => [...prev, { role: 'user', text: message }]);
    setInput('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_BASE_URL}/chatbot/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      const answerText = data?.answer || 'I could not process that query. Please try again.';
      const nextSuggestions = Array.isArray(data?.suggestions) && data.suggestions.length
        ? data.suggestions
        : QUICK_PROMPTS;

      setMessages((prev) => [...prev, { role: 'bot', text: answerText }]);
      setSuggestions(nextSuggestions);

      if (data?.handoffRecommended) {
        setSuggestions((prev) => [...prev.slice(0, 2), 'Create support ticket']);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'I am having trouble connecting right now. Please try again or open a support ticket.'
        }
      ]);
      setSuggestions(['Create support ticket', ...QUICK_PROMPTS.slice(0, 2)]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.toLowerCase().includes('support ticket')) {
      navigate('/support');
      setIsOpen(false);
      return;
    }
    sendMessage(suggestion);
  };

  return (
    <>
      <style>{`
        .ft-chat-toggle {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 1100;
          border: none;
          border-radius: 999px;
          background: #2563eb;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 16px;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.35);
        }
        .ft-chat-toggle:hover { background: #1d4ed8; }

        .ft-chat-panel {
          position: fixed;
          right: 20px;
          bottom: 68px;
          z-index: 1100;
          width: 360px;
          max-width: calc(100vw - 24px);
          height: 480px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #dbe4f2;
          box-shadow: 0 22px 46px rgba(15, 23, 42, 0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .ft-chat-header {
          border-bottom: 1px solid #edf2f7;
          background: linear-gradient(120deg, #eff6ff, #f8fbff);
          padding: 12px 14px;
        }
        .ft-chat-title { margin: 0; color: #111827; font-size: 15px; font-weight: 600; }
        .ft-chat-subtitle { margin-top: 2px; font-size: 12px; color: #6b7280; }

        .ft-chat-body {
          flex: 1;
          overflow-y: auto;
          background: #fcfdff;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft-chat-msg {
          max-width: 86%;
          border-radius: 10px;
          font-size: 13px;
          line-height: 1.35;
          padding: 8px 10px;
        }
        .ft-chat-msg.bot {
          align-self: flex-start;
          color: #111827;
          border: 1px solid #dbeafe;
          background: #eff6ff;
        }
        .ft-chat-msg.user {
          align-self: flex-end;
          color: #fff;
          border: 1px solid #2563eb;
          background: #2563eb;
        }

        .ft-chat-suggestions {
          border-top: 1px solid #edf2f7;
          border-bottom: 1px solid #edf2f7;
          padding: 8px 10px;
          display: flex;
          gap: 6px;
          overflow-x: auto;
        }
        .ft-chat-chip {
          border: 1px solid #dbeafe;
          background: #f0f7ff;
          color: #1e40af;
          border-radius: 999px;
          padding: 4px 8px;
          font-size: 12px;
          cursor: pointer;
          white-space: nowrap;
        }
        .ft-chat-chip:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-chat-form {
          padding: 10px;
          display: flex;
          gap: 8px;
        }
        .ft-chat-input {
          flex: 1;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 9px 10px;
          font-size: 13px;
          outline: none;
        }
        .ft-chat-input:focus { border-color: #2563eb; }

        .ft-chat-send {
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 12px;
          cursor: pointer;
        }
        .ft-chat-send:disabled { background: #9ca3af; cursor: not-allowed; }

        @media (max-width: 640px) {
          .ft-chat-toggle { right: 12px; bottom: 12px; }
          .ft-chat-panel {
            right: 10px;
            left: 10px;
            width: auto;
            bottom: 58px;
            height: 62vh;
          }
        }
      `}</style>

      <button className="ft-chat-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}>
        {isOpen ? 'Close Chat' : 'Trade Chat'}
      </button>

      {isOpen ? (
        <div className="ft-chat-panel" role="dialog" aria-label="Trade chatbot panel">
          <div className="ft-chat-header">
            <h4 className="ft-chat-title">NiveshBot</h4>
            <div className="ft-chat-subtitle">Ask trade-related queries across the platform</div>
          </div>

          <div className="ft-chat-body">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`ft-chat-msg ${message.role}`}>
                {message.text}
              </div>
            ))}
            {loading ? <div className="ft-chat-msg bot">Typing...</div> : null}
          </div>

          <div className="ft-chat-suggestions">
            {suggestions.slice(0, 3).map((item, index) => (
              <button key={`${item}-${index}`} type="button" className="ft-chat-chip" disabled={loading} onClick={() => handleSuggestionClick(item)}>
                {item}
              </button>
            ))}
          </div>

          <form className="ft-chat-form" onSubmit={handleSubmit}>
            <input
              className="ft-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your trade query..."
            />
            <button type="submit" className="ft-chat-send" disabled={loading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default TradeChatbot;
