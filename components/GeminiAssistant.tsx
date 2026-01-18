import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

interface GeminiAssistantProps {
  onClose: () => void;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to UcreationAI Diagnostics. I am your specialized hardware analyst. Describe the symptoms your machine is experiencing." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput('');
    setIsTyping(true);

    try {
      const response = await getDiagnosticResponse(updatedHistory);
      setMessages([...updatedHistory, { role: 'model', text: response }]);
    } catch (err) {
      setMessages([...updatedHistory, { role: 'model', text: "Diagnostic neural-link failed. Please retry." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-[#0b0b0b] border border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col h-[600px]">
      <div className="bg-[#111] border-b border-[#1a1a1a] p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#44d62c] rounded-full animate-pulse shadow-[0_0_8px_rgba(68,214,44,0.6)]"></div>
          <span className="font-orbitron font-bold uppercase tracking-widest text-sm">UcreationAI Core v3.0</span>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-[#44d62c] text-black font-semibold' 
                : 'bg-[#1a1a1a] text-gray-200 border-l-2 border-[#44d62c]'
            }`}>
              {msg.text.split('\n').map((line, j) => (
                <p key={j} className={j > 0 ? 'mt-2' : ''}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#1a1a1a] p-4 flex gap-1 items-center border-l-2 border-[#44d62c]">
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your machine's issue..."
            className="flex-1 bg-black border border-[#222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#44d62c] transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="bg-[#44d62c] text-black p-3 hover:bg-white transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
          </button>
        </div>
        <p className="text-[10px] text-gray-600 mt-2 text-center uppercase tracking-widest font-bold">
          UcreationAI can provide diagnostic suggestions, but in-lab inspection is required for final repair.
        </p>
      </div>
    </div>
  );
};

export default GeminiAssistant;