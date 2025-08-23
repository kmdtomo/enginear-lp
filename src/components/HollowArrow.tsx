import React from 'react'

type HollowArrowProps = {
  className?: string
  children?: React.ReactNode
}

const HollowArrow: React.FC<HollowArrowProps> = ({ className, children }) => {
  return (
    <div className={`relative ${className || ''}`}>
      <div className="relative flex items-stretch h-24">
        <div 
          className="flex-1 rounded-l-[50px]"
          style={{
            background: 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)'
          }}
        ></div>
        <div className="relative w-32">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
            }}
          />
        </div>
      </div>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

export default HollowArrow