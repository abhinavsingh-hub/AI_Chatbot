# 🌌 AI Chatbot v4.0 - Immersive 3D Multimodal Hub

https://ai-chatbot-whiaqowab-abhinavsinghdhakrekm-2291s-projects.vercel.app/

A high-performance, visually stunning AI Chatbot built with **React**, **Three.js**, and **Tailwind CSS**. Experience seamless transitions between text-based reasoning and visual imagination in a fully immersive 3D environment.

## ✨ Key Features

- **Multimodal Intelligence**: Seamlessly switch between text generation (Mistral 7B) and image synthesis (FLUX.1).
- **Immersive 3D UI**: Futuristic background with morphing geometry that responds to user interactions and scroll progress.
- **Glassmorphic Design**: Modern, translucent UI components with vibrant glow effects and fluid animations.
- **Real-time Performance**: Optimized API routing via Hugging Face Router for low-latency responses.
- **Futuristic Landing Page**: Comprehensive introduction to the project's architecture and capabilities.

## 🛠️ Technical Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) via [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **AI Backend**: [Hugging Face Router API](https://huggingface.co/docs/api-inference/index)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏗️ Architecture

The application follows a modular architecture:
1. **Frontend**: React-based UI with centralized state management for chat history and mode switching.
2. **3D Layer**: Isolated Three.js scene rendered as a background, reactive to global state.
3. **Service Layer**: Decoupled AI service handling API calls with built-in proxy support for CORS resolution.

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhinavsingh-hub/AI_Chatbot.git
   cd AI_Chatbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file and add your Hugging Face token:
   ```env
   VITE_HF_TOKEN=your_hugging_face_token_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📜 License
MIT License. Feel free to use and modify for your own projects.

---
Built with ❤️ by Abhinav
