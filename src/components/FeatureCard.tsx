import React from 'react'

interface FeatureCardProps {
  number: string
  title: string | React.ReactNode
  description: string | React.ReactNode
  image: string
  imageAlt?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  number, 
  title, 
  description, 
  image, 
  imageAlt = "" 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden px-2">
      <div className="grid grid-cols-10">
        {/* 左側 - 画像 (3) */}
        <div className="col-span-3 flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* 右側 - コンテンツ (7) */}
        <div className="col-span-7 p-8 md:p-12">
          <div className="space-y-4">
            {/* Feature番号とライン */}
            <div className="flex items-center gap-2">
              <span className="text-base font-medium" style={{ color: '#2911E2' }}>
                Feature <span className="text-xl md:text-3xl font-bold pl-1">{number}</span>
              </span>
              <div className="w-60 h-0.5 bg-[#2911E2]"></div>
            </div>
            
            {/* タイトル */}
            <h3 className="text-xl md:text-3xl font-bold text-black pt-4 pb-2">
              {title}
            </h3>
            
            {/* 説明 */}
            <p className="text-sm md:text-base text-black leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard