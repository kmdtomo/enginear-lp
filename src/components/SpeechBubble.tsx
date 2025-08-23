import React from 'react'

interface SpeechBubbleProps {
  className?: string
  children?: React.ReactNode
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ className = '', children }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center bg-[#F6F6F6] rounded-full shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}

export default SpeechBubble