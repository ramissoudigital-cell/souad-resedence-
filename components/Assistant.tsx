
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, generateSpeech, decodeBase64, decodeAudioData } from '../services/geminiService';

interface AssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (pageId: string) => void;
}

const Assistant: React.FC<AssistantProps> = ({ isOpen, onToggle, onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bienvenue chez Souad Residences. Je suis votre Majordome Digital. Comment puis-je sublimer votre séjour aujourd\'hui ?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<number | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isThinking]);

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const playAudio = async (base64Audio: string, messageId: number) => {
    initAudio();
    if (!audioContextRef.current) return;
    
    if (currentSourceRef.current) {
      try { currentSourceRef.current.stop(); } catch(e) {}
    }

    setCurrentlySpeakingId(messageId);
    try {
      const audioData = decodeBase64(base64Audio);
      const audioBuffer = await decodeAudioData(audioData, audioContextRef.current);
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => setCurrentlySpeakingId(null);
      source.start();
      currentSourceRef.current = source;
    } catch (e) {
      console.error("Erreur de lecture audio", e);
      setCurrentlySpeakingId(null);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isThinking) return;
    initAudio();

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const result = await sendMessageToGemini(history, userMsg.text);
      
      const audioBase64 = await generateSpeech(result.text);

      const aiMsg: ChatMessage = { 
        role: 'model', 
        text: result.text, 
        timestamp: Date.now(),
        audioBase64: audioBase64 || undefined
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsThinking(false);

      if (audioBase64) {
        playAudio(audioBase64, aiMsg.timestamp);
      }
    } catch (err) {
      setIsThinking(false);
      setMessages(prev => [...prev, { role: 'model', text: "Une erreur est survenue lors de la communication.", timestamp: Date.now() }]);
    }
  };

  const renderMessageText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(#.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\(#(.*?)\)/);
      if (match) {
        const linkText = match[1];
        const pageId = match[2];
        return (
          <button
            key={i}
            onClick={() => {
              if (onNavigate) onNavigate(pageId);
              if (window.innerWidth < 768) onToggle();
            }}
            className="text-blue-400 font-bold underline underline-offset-4 hover:text-blue-300 transition-colors mx-1"
          >
            {linkText}
          </button>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-[#020617]/95 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl w-[90vw] sm:w-[420px] h-[600px] mb-6 flex flex-col overflow-hidden border border-blue-900/50 animate-fade-in-up">
          <div className="bg-blue-900/40 p-6 text-white flex justify-between items-center border-b border-blue-900/30">
            <div className="flex items-center gap-3">
                <div className="flex items-end gap-1 h-4 w-6">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 bg-blue-400 rounded-full transition-all duration-300 ${currentlySpeakingId ? 'animate-bounce' : 'h-1 opacity-30'}`}
                      style={{ animationDelay: `${i * 0.1}s`, height: currentlySpeakingId ? '100%' : '4px' }}
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-serif italic text-xl">Majordome Souad</span>
                  {currentlySpeakingId && <span className="text-[8px] uppercase tracking-widest text-blue-400">Le Majordome vous parle...</span>}
                </div>
            </div>
            <button onClick={onToggle} className="hover:rotate-90 transition-transform duration-500 text-blue-400 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-5 text-sm leading-relaxed rounded-3xl shadow-sm border transition-all duration-500 relative ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none' 
                      : 'bg-blue-900/40 text-blue-100 border-blue-900/50 rounded-tl-none pb-14'
                  }`}
                >
                  {renderMessageText(msg.text)}

                  {msg.role === 'model' && (
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                      <button 
                        onClick={() => msg.audioBase64 && playAudio(msg.audioBase64, msg.timestamp)}
                        disabled={!msg.audioBase64}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border text-[10px] font-bold uppercase tracking-widest ${
                          !msg.audioBase64 ? 'opacity-0 pointer-events-none' :
                          currentlySpeakingId === msg.timestamp 
                          ? 'bg-blue-400 text-blue-950 border-blue-400 scale-105' 
                          : 'bg-blue-900/60 text-blue-300 border-blue-400/20 hover:bg-blue-400 hover:text-blue-950 hover:border-blue-400'
                        }`}
                      >
                        <svg className={`w-3.5 h-3.5 ${currentlySpeakingId === msg.timestamp ? 'animate-pulse' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.5 4.06c0-1.333-1.613-2-2.56-1.053l-5.323 5.323H3a2 2 0 00-2 2v3.334a2 2 0 002 2h2.617l5.323 5.323c.947.947 2.56.28 2.56-1.053V4.06zM15.5 12c0-1.768-1.012-3.3-2.5-4.062v8.125c1.488-.763 2.5-2.294 2.5-4.063z" />
                        </svg>
                        <span>{currentlySpeakingId === msg.timestamp ? 'En cours...' : 'Écouter'}</span>
                      </button>
                      <span className="text-[8px] opacity-20 italic">Vocalisé par Souad IA</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start animate-pulse">
                 <div className="bg-blue-900/20 border border-blue-900/30 p-4 rounded-2xl text-[10px] uppercase tracking-widest italic text-blue-400">
                   Le majordome prépare sa réponse...
                 </div>
               </div>
            )}
          </div>

          <div className="p-6 bg-blue-900/10 border-t border-blue-900/30">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message au Majordome..." 
                className="flex-1 bg-blue-900/20 border border-blue-900/50 focus:border-blue-400 px-6 py-4 text-sm outline-none transition-all rounded-full placeholder-blue-300/30 text-white shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all shadow-xl disabled:opacity-50 ${isThinking ? 'bg-blue-900' : 'bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 text-white'}`}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => { onToggle(); initAudio(); }}
        className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-2xl hover:rotate-12 transition-all duration-500 hover:scale-110 relative ${
          currentlySpeakingId ? 'bg-blue-400' : 'bg-blue-600'
        }`}
      >
        <span className={`font-serif italic text-xl md:text-2xl transition-colors ${currentlySpeakingId ? 'text-blue-950' : 'text-white'}`}>IA</span>
        {currentlySpeakingId && (
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping"></div>
        )}
      </button>
    </div>
  );
};

export default Assistant;
