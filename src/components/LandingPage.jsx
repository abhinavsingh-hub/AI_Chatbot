import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Brain, ImageIcon, Zap, Cpu, Code2, Globe } from 'lucide-react'

export default function LandingPage({ onStart }) {
    return (
        <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-brand/10 rounded-2xl border border-brand/20 backdrop-blur-xl animate-pulse">
                            <Sparkles className="w-12 h-12 text-brand" />
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent tracking-tighter">
                        THE FUTURE OF <br /> INTELLIGENCE
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Experience the next generation of AI-driven creativity. Dynamic, immersive, and powered by state-of-the-art neural architectures.
                    </p>
                </motion.div>

                {/* Importance Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Why This Project?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Cpu className="text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white/90">Multimodal Synergy</h3>
                                    <p className="text-white/50 text-sm">Bridging the gap between linguistic reasoning and visual imagination in a single interface.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <Globe className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white/90">Open Accessibility</h3>
                                    <p className="text-white/50 text-sm">Leveraging decentralized AI models via Hugging Face to democratize advanced intelligence.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Zap className="text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white/90">Immersive Experience</h3>
                                    <p className="text-white/50 text-sm">Beyond simple chat boxes—utilizing 3D environments to create a spatial AI relationship.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square"
                    >
                        <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full"></div>
                        <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl flex flex-col p-8 overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Code2 className="text-brand w-24 h-24" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Technical Stack</h3>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-white/40 italic">Frontend</span>
                                    <span className="text-brand">React + Vite</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-white/40 italic">3D Rendering</span>
                                    <span className="text-brand">Three.js (R3F)</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-white/40 italic">AI Integration</span>
                                    <span className="text-brand">HF Router API</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-white/40 italic">Motion Design</span>
                                    <span className="text-brand">Framer Motion</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-brand/10 border border-brand/20 rounded-xl">
                                <p className="text-brand text-[10px] uppercase font-bold tracking-[0.2em] mb-2">Internal Routing</p>
                                <div className="flex gap-2">
                                    <div className="h-1 flex-1 bg-brand rounded-full"></div>
                                    <div className="h-1 flex-1 bg-white/10 rounded-full"></div>
                                    <div className="h-1 flex-1 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/5 border border-white/10 rounded-[2.5rem] p-16 backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/20 blur-[100px] rounded-full"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>

                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
                    <p className="text-white/50 mb-10 max-w-sm mx-auto">
                        Choose your starting neural interface. You can switch between models anytime within the hub.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onStart('text')}
                            className="px-10 py-5 bg-brand text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,242,255,0.4)] flex items-center justify-center gap-3"
                        >
                            <Brain size={24} /> INITIALIZE CHAT
                        </button>
                        <button
                            onClick={() => onStart('image')}
                            className="px-10 py-5 bg-white/10 text-white font-black rounded-2xl hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-3 backdrop-blur-xl"
                        >
                            <ImageIcon size={24} /> IMAGE STUDIO
                        </button>
                    </div>
                </motion.div>
            </div>

            <p className="text-center text-white/20 text-xs py-10">
                AI Chatbot Hub v4.0 • Built with Passion
            </p>
        </div>
    )
}
