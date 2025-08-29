import React from 'react'

interface CurriculumCardProps {
  type: string
  title: string
  subtitle: string
  items: string[]
  gradient?: string
  buttonText?: string
  accentColor?: string
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ 
  type, 
  title, 
  subtitle, 
  items, 
  gradient = 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)',
  buttonText = 'ハンズオン実践',
  accentColor = '#2911E2'
}) => {
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative" style={{ borderTopLeftRadius: '0' }}>
      {/* ヘッダー - 斜めのデザイン */}
      <div className="relative h-12 md:h-14 -mx-[1px] -mt-[1px]">
        <div 
          className="absolute left-0 top-0 h-full w-1/2 md:w-3/5"
          style={{ 
            background: gradient,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            borderTopLeftRadius: '0'
          }}
        >
          <div className="h-full flex items-center justify-center pr-8">
            <span className="text-white font-bold text-lg md:text-2xl" style={{ letterSpacing: '0.2rem' }}>{type}</span>
          </div>
        </div>
      </div>
      
      {/* コンテンツ */}
      <div className="pb-6">
        {/* アイコン */}
        <div className="flex justify-center">
          <img 
            src={type === '基礎学習' ? '/curriculum/Security-cuate.png' : '/curriculum/Cloud hosting-cuate (1).png'} 
            alt={`${type}アイコン`}
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
          />
        </div>
        
        {/* タイトル */}
        <h3 className="text-center font-bold text-lg md:text-xl mb-2 text-gray-800" style={{ letterSpacing: '0.15rem', lineHeight: '1.6' }}>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
        {subtitle && (
          <p className="text-center text-gray-600 text-sm mb-6">
            {subtitle}
          </p>
        )}
        
        {/* 項目リスト */}
        <ul className={`space-y-3 max-w-sm md:pl-4 mx-auto ${type === '基礎学習' ? 'mt-8 md:mt-16' : 'md:mt-6'}`}>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-[8px]" style={{ color: accentColor }}>●</span>
              <span className="text-sm text-gray-700 font-medium" dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        
        {/* プラスボタンとテキスト */}
        <div className={`flex flex-col items-center ${type === '基礎学習' ? 'mt-10 md:mt-17' : 'mt-4'}`}>
          <span className="text-black text-3xl font-light mb-2">+</span>
          <span className="font-bold text-xl" style={{ color: accentColor }}>
            {buttonText}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CurriculumCard