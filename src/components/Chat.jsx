import React, { useState, useRef, useEffect } from 'react'
import { Send, Image as ImageIcon, Loader2, Sparkles, User, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchChatResponse, fetchImageResponse } from '../services/aiService'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export default function Chat({ onHoverChange, initialMode = 'text' }) {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Hello! I am your AI assistant. How can I help you today?', type: 'text' }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [mode, setMode] = useState(initialMode) // 'text' or 'image'
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage = { role: 'user', content: input, type: 'text' }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            if (mode === 'image') {
                const imageUrl = await fetchImageResponse(input)
                setMessages(prev => [...prev, { role: 'bot', content: imageUrl, type: 'image' }])
            } else {
                const reply = await fetchChatResponse([...messages, userMessage])
                setMessages(prev => [...prev, { role: 'bot', content: reply, type: 'text' }])
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, something went wrong. Please check your connection or API token.', type: 'text' }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="relative z-10 flex flex-col h-screen max-w-4xl mx-auto p-4 md:p-8">
            <header className="flex items-center justify-between py-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand/20 rounded-xl border border-brand/50 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                        <Sparkles className="w-6 h-6 text-brand" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        AI Chatbot v4.0
                    </h1>
                </div>

                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                    <button
                        onClick={() => setMode('text')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-bold",
                            mode === 'text' ? "bg-brand text-black shadow-lg" : "text-white/40 hover:text-white"
                        )}
                    >
                        <Bot size={16} /> Text
                    </button>
                    <button
                        onClick={() => setMode('image')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-bold",
                            mode === 'image' ? "bg-brand text-black shadow-lg" : "text-white/40 hover:text-white"
                        )}
                    >
                        <ImageIcon size={16} /> Image
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto mb-6 pr-4 custom-scrollbar">
                <div className="space-y-6">
                    <AnimatePresence initial={false}>
                        {messages.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={cn(
                                    "flex gap-4",
                                    m.role === 'user' ? "flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                                    m.role === 'user'
                                        ? "bg-brand/10 border-brand/30 text-brand"
                                        : "bg-white/5 border-white/10 text-white/50"
                                )}>
                                    {m.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                                </div>

                                <div className={cn(
                                    "max-w-[80%] p-4 rounded-2xl backdrop-blur-md border shadow-xl",
                                    m.role === 'user'
                                        ? "bg-brand/10 border-brand/20 rounded-tr-none text-white"
                                        : "bg-white/5 border-white/10 rounded-tl-none text-white/90"
                                )}>
                                    {m.type === 'text' ? (
                                        <p className="whitespace-pre-wrap leading-relaxed">{m.content}</p>
                                    ) : (
                                        <div className="rounded-lg overflow-hidden border border-white/10">
                                            <img src={m.content} alt="AI Generated" className="w-full h-auto" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <Bot size={20} className="text-white/50" />
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none backdrop-blur-md">
                                <Loader2 className="w-5 h-5 animate-spin text-brand" />
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            <footer className="pb-4">
                <div className="relative group"
                    onMouseEnter={() => onHoverChange(true)}
                    onMouseLeave={() => onHoverChange(false)}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-purple-600 rounded-2xl opacity-30 group-focus-within:opacity-100 transition duration-500 blur"></div>
                    <div className="relative flex items-center gap-2 p-2 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={mode === 'text' ? "Ask Llama 3.1 anything..." : "Describe an image to generate..."}
                            className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/30"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="p-4 bg-brand text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center gap-2"
                        >
                            {isLoading ? <Loader2 size={20} className="animate-spin" /> : (
                                <>
                                    <span className="hidden md:inline">{mode === 'text' ? 'Send' : 'Generate'}</span>
                                    {mode === 'text' ? <Send size={20} /> : <Sparkles size={20} />}
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                    <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest">
                        Active Model: {mode === 'text' ? 'Mistral 7B v0.3' : 'Stable Diffusion 2.1'}
                    </p>
                </div>
                <p className="text-center text-white/20 text-xs mt-4">
                    Powered by Mistral AI & Stability AI
                </p>
            </footer>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 242, 255, 0.3); }
      `}</style>
        </div>
    )
}
