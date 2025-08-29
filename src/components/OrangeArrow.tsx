import React from 'react'

type OrangeArrowProps = {
  className?: string
  children?: React.ReactNode
}

const OrangeArrow: React.FC<OrangeArrowProps> = ({ className, children }) => {
  return (
    <div className={`relative inline-block ${className || ''}`}>
      <div
        className="h-full w-full flex items-center justify-center text-white font-medium text-sm pr-2"
        style={{
          background: 'linear-gradient(135deg, #FC4A1A 0%, #FFAC00 100%)',
          clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default OrangeArrow