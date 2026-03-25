import { useState } from 'react'
import Scene from './components/Scene'
import Chat from './components/Chat'
import LandingPage from './components/LandingPage'

function App() {
  const [showChat, setShowChat] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [initialMode, setInitialMode] = useState('text')

  const handleStart = (mode) => {
    setInitialMode(mode)
    setShowChat(true)
  }

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      <Scene isHovered={isHovered} />
      {showChat ? (
        <Chat onHoverChange={setIsHovered} initialMode={initialMode} />
      ) : (
        <LandingPage onStart={handleStart} />
      )}
    </div>
  )
}

export default App
