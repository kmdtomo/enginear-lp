import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface FeatureCardProps {
  number: string
  title: string | React.ReactNode
  description: string | React.ReactNode
  image: string
  imageAlt?: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  number, 
  title, 
  description, 
  image, 
  imageAlt = "",
  delay = 0
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <div 
      ref={ref}
      className={`fade-in-up ${isInView ? 'in-view' : ''} bg-white/98 border border-black/5 rounded-2xl shadow-md overflow-hidden px-0 sm:px-2 w-11/12 sm:w-4/5 mx-auto md:w-auto md:mx-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-10 md:grid-cols-10">
        {/* 左側 - 画像 */}
        <div className="sm:col-span-3 md:col-span-3 flex items-center justify-center pt-5 pb-1 sm:p-5 md:p-6">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-36 sm:w-full md:w-full h-auto object-contain"
          />
        </div>
        
        {/* 右側 - コンテンツ */}
        <div className="sm:col-span-7 md:col-span-7 p-6 sm:p-6 md:p-10">
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {/* Feature番号とライン */}
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-lg md:text-xl font-semibold md:tracking-[0.14em] tracking-[0.08em]" style={{ color: '#2911E2' }}>
                Feature <span className="text-3xl sm:text-3xl md:text-4xl font-extrabold md:pl-1 md:tracking-[0.22em]">{number}</span>
              </span>
              <div className="flex-1 sm:w-60 md:w-60 h-[2px] bg-[#2911E2]"></div>
            </div>
            
            {/* タイトル */}
            <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-black pt-2 sm:pt-4 md:pt-4 pb-1 sm:pb-2 md:pb-2 tracking-[0.02em]">
              {title}
            </h3>
            
            {/* 説明 */}
            <p className="text-xs sm:text-sm md:text-base text-black leading-[1.9] tracking-[0.02em]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard