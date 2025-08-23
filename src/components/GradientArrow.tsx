import React from 'react'

type GradientArrowProps = {
  className?: string
}

const GradientArrow: React.FC<GradientArrowProps> = ({ className }) => {
  const uniqueId = Math.random().toString(36).substr(2, 9);
  
  return (
    <div className={`relative ${className || ''}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`arrowGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0575E6" />
            <stop offset="100%" stopColor="#021B79" />
          </linearGradient>
          <linearGradient id={`arrowOpacity-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id={`arrowMask-${uniqueId}`}>
            <rect x="0" y="0" width="100" height="100" fill={`url(#arrowOpacity-${uniqueId})`} />
          </mask>
        </defs>
        <g mask={`url(#arrowMask-${uniqueId})`}>
          <path
            d="M 0 0 L 80 0 L 100 50 L 80 100 L 0 100 Z"
            fill={`url(#arrowGradient-${uniqueId})`}
          />
        </g>
      </svg>
    </div>
  )
}

export default GradientArrow