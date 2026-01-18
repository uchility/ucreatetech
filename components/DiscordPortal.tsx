
import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  roleColor?: string;
}

interface DiscordPortalProps {
  onBack: () => void;
}

const DiscordPortal: React.FC<DiscordPortalProps> = ({ onBack }) => {
  const [activeChannel, setActiveChannel] = useState('general-discussion');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      author: 'NexMod', 
      avatar: 'https://i.pravatar.cc/150?u=nexmod', 
      content: 'Welcome to the Ucreation Neural Network. Please read #rules before posting.', 
      timestamp: 'Today at 10:15 AM',
      roleColor: '#44d62c'
    },
    { 
      id: '2', 
      author: 'GamerX88', 
      avatar: 'https://i.pravatar.cc/150?u=gamerx', 
      content: 'Just got my Vesper 16! Thermals are insane, staying at 70C under full load.', 
      timestamp: 'Today at 11:02 AM' 
    },
    { 
      id: '3', 
      author: 'TechGuru', 
      avatar: 'https://i.pravatar.cc/150?u=guru', 
      content: 'Has anyone tried the new firmware update? Is it safe for undervolting?', 
      timestamp: 'Today at 11:45 AM',
      roleColor: '#44d62c'
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const channels = [
    { id: 'announcements', label: 'announcements', icon: 'M10.34 15.84c-.68 1.14-1.99 1.4-2.71.53-.29-.35-.38-.82-.24-1.26l.54-1.63c.12-.37.4-.66.77-.79l1.63-.54c.44-.14.91-.05 1.26.24.87.72.61 2.03-.53 2.71l-.72.72ZM17.71 6.29a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 1 0 1.42 1.42l4.24-4.24a1 1 0 0 0 0-1.42Z' },
    { id: 'rules', label: 'rules', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' },
    { id: 'general-discussion', label: 'general-discussion', icon: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-1.154-.114 2.315 2.315 0 0 0-.711-1.42 6.275 6.275 0 0 1-1.045-3.436c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z' },
    { id: 'tech-support', label: 'tech-support', icon: 'M11.42 15.17 17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83c.47-.94.73-2 .73-3.11a7.06 7.06 0 0 0-14.12 0c0 1.11.26 2.17.73 3.11L2.51 11.42c-.44.44-.44 1.16 0 1.6l1.25 1.25c.44.44 1.16.44 1.6 0l5.83-5.83c.94.47 2 .73 3.11.73.55 0 1.07-.06 1.58-.17l-1.46-1.46c-.51.11-1.03.17-1.58.17-.55 0-1.07-.06-1.58-.17l-5.83 5.83a2.67 2.67 0 0 0 0 3.75l1.25 1.25a2.67 2.67 0 0 0 3.75 0l5.83-5.83c-.47-.94-.73-2-.73-3.11a7.06 7.06 0 0 0 14.12 0c0-1.11-.26-2.17-.73-3.11l-1.25 1.25Z' },
    { id: 'setup-showcase', label: 'setup-showcase', icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
  ];

  const members = [
    { name: 'NexMod', status: 'online', role: 'Staff', color: '#44d62c' },
    { name: 'TechGuru', status: 'online', role: 'Ucreation MVP', color: '#44d62c' },
    { name: 'GamerX88', status: 'online', role: 'Member' },
    { name: 'ApexPredator', status: 'idle', role: 'Member' },
    { name: 'VesperFan', status: 'offline', role: 'Member' },
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      author: 'You',
      avatar: 'https://i.pravatar.cc/150?u=you',
      content: input,
      timestamp: 'Just now',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-[80vh] bg-[#050505] border border-[#1a1a1a] overflow-hidden m-4 rounded-lg shadow-2xl relative">
      {/* Sidebar - Channels */}
      <div className="w-64 bg-[#0a0a0a] border-r border-[#1a1a1a] hidden md:flex flex-col">
        <div className="p-4 border-b border-[#1a1a1a] flex justify-between items-center">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-[#44d62c]">UCREATION HUB</span>
          <button onClick={onBack} className="text-gray-500 hover:text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4 space-y-1">
          {channels.map(ch => (
            <button 
              key={ch.id}
              onClick={() => setActiveChannel(ch.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold transition-colors ${
                activeChannel === ch.id ? 'bg-[#44d62c]/10 text-white' : 'text-gray-500 hover:bg-[#111] hover:text-gray-300'
              }`}
            >
              <span className="opacity-60 text-lg">#</span>
              {ch.label}
            </button>
          ))}
        </div>
        <div className="p-4 bg-[#080808] border-t border-[#1a1a1a] flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#44d62c] flex items-center justify-center text-black font-bold">U</div>
            <div className="flex-1">
              <div className="text-xs font-bold text-white uppercase tracking-tighter">Guest_Agent</div>
              <div className="text-[9px] text-gray-500 uppercase font-bold">#4090</div>
            </div>
            <button className="text-gray-500 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 0 1-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 0 1 .947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 0 1 2.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 0 1 2.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 0 1 .947-2.287c1.561-.379 1.561-2.6 0-2.978a1.533 1.533 0 0 1-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.533 1.533 0 0 1-2.287-.947ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
            </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#050505]">
        <div className="h-12 border-b border-[#1a1a1a] px-4 flex items-center gap-4 bg-[#0a0a0a]">
          <span className="text-gray-500 text-xl font-light">#</span>
          <span className="font-bold text-sm tracking-tight">{activeChannel}</span>
          <div className="ml-auto flex items-center gap-4">
             <button onClick={onBack} className="md:hidden text-gray-500 hover:text-white">Back</button>
             <button className="text-gray-500 hover:text-white">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
             </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="border-b border-[#1a1a1a] pb-8 mb-4">
             <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center text-4xl mb-4 border border-[#44d62c]/30 shadow-[0_0_15px_rgba(68,214,44,0.1)]">#</div>
             <h1 className="text-3xl font-orbitron font-bold">Welcome to #{activeChannel}!</h1>
             <p className="text-gray-500 text-sm mt-2 font-semibold uppercase tracking-widest">This is the start of the #{activeChannel} channel.</p>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-4 group hover:bg-[#111]/30 -mx-4 px-4 py-1 transition-colors">
              <img src={msg.avatar} className="w-10 h-10 rounded-full bg-gray-800" alt="" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm cursor-pointer hover:underline" style={{ color: msg.roleColor || 'white' }}>{msg.author}</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase">{msg.timestamp}</span>
                </div>
                <div className="text-sm text-gray-300 leading-relaxed mt-0.5">{msg.content}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-[#0a0a0a]">
          <div className="bg-[#1a1a1a] rounded-lg px-4 flex items-center gap-4">
             <button className="text-gray-400 hover:text-white text-xl">+</button>
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
               className="flex-1 bg-transparent py-3 text-sm focus:outline-none placeholder:text-gray-600 font-semibold"
               placeholder={`Message #${activeChannel}`}
             />
             <div className="flex items-center gap-3 text-gray-400">
                <button className="hover:text-white">🎁</button>
                <button className="hover:text-white">GIF</button>
                <button className="hover:text-white">😊</button>
             </div>
          </div>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-60 bg-[#0a0a0a] border-l border-[#1a1a1a] hidden lg:flex flex-col">
        <div className="p-4 uppercase text-[10px] font-black tracking-widest text-gray-600">Agents — {members.length}</div>
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {members.map((m, i) => (
            <button key={i} className="w-full flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#111] group transition-colors">
              <div className="relative">
                <img src={`https://i.pravatar.cc/150?u=${m.name}`} className="w-8 h-8 rounded-full" alt="" />
                <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] ${
                  m.status === 'online' ? 'bg-[#44d62c]' : m.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-600'
                }`}></div>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold tracking-tight" style={{ color: m.color || '#999' }}>{m.name}</div>
                {m.role && <div className="text-[9px] text-gray-500 uppercase font-bold">{m.role}</div>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscordPortal;
