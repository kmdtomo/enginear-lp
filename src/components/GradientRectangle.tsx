import React from 'react'

type GradientRectangleProps = {
  className?: string
  children?: React.ReactNode
}

const GradientRectangle: React.FC<GradientRectangleProps> = ({ className, children }) => {
  return (
    <div 
      className={`relative ${className || ''}`}
      style={{
        background: 'linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(5,117,230,0) 100%)'
      }}
    >
      {children}
    </div>
  )
}

export default GradientRectangle