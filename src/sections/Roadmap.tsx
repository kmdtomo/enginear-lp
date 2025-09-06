import React from 'react'
import GradientRectangle from '../components/GradientRectangle'
import GradientArrow from '../components/GradientArrow'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Roadmap: React.FC = () => {
  const { ref: titleRef, isInView: isTitleInView } = useScrollAnimation({ threshold: 0.2 })
  const { ref: cardsRef, isInView: isCardsInView } = useScrollAnimation({ threshold: 0.1 })
  const steps = [
    {
      number: '01',
      title: '映像授業',
      description: '見返せるオンデマンド授業で、体系的に学習',
      icon: '/step1-icon.svg'
    },
    {
      number: '02',
      title: 'LIVE授業によるハンズオン',
      description: 'ハンズオン形式で構築演習を実施',
      icon: '/step2-icon.svg'
    },
    {
      number: '03',
      title: '模擬案件で学ぶ',
      description: '実務そのままの構成を想定したシステム構築',
      icon: '/step3-icon.svg'
    }
  ]

  return (
    <section className="relative bg-[#F5F6FC] pt-12 md:py-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 overflow-visible">
        {/* モバイル版レイアウト */}
        <div 
          ref={titleRef}
          className={`slide-in-from-left ${isTitleInView ? 'in-view' : ''} md:hidden relative mb-12 md:mb-10 flex items-center justify-center gap-3`}
        >
          <GradientRectangle className="w-14 h-5" />
          <h2 className="text-base font-bold text-center leading-tight" style={{ letterSpacing: '0.02em' }}>
            最短<span className="text-2xl mx-1" style={{ color: '#2911E2' }}>2ヶ月</span>で
            <span className="block mt-1.5">即戦力クラウドエンジニアへ</span>
          </h2>
          <GradientArrow className="w-14 h-5" />
        </div>

        {/* PC版レイアウト */}
        <div className="hidden md:block relative mb-16 pb-4">
          <div 
            ref={titleRef}
            className={`slide-in-from-left ${isTitleInView ? 'in-view' : ''} flex items-center justify-center gap-5 w-full max-w-6xl mx-auto`}
          >
            <GradientRectangle className="w-72 h-10 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-center px-4 leading-relaxed" style={{ letterSpacing: '0.2em' }}>
              最短<span className="text-4xl mx-2" style={{ color: '#2911E2' }}>2ヶ月</span>で
              <br />
              即戦力クラウドエンジニアへ
            </h2>
            <GradientArrow className="w-72 h-10 flex-shrink-0" />
          </div>
        </div>

        {/* モバイル版: グリッド表示 */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 gap-12 md:hidden"
        >
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`slide-in-from-left ${isCardsInView ? 'in-view' : ''} relative flex flex-col items-center`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <div className="absolute -top-6 left-3 md:text-3xl text-4xl font-bold z-10" style={{ color: '#2911E2' }}>
                  {step.number}
                </div>
                <div className="bg-white rounded-2xl overflow-hidden w-72 mx-auto">
                  <div className="flex items-center justify-center p-3">
                    <div className="w-36 h-36">
                      {step.number === '01' && (
                        <img 
                          src="/roadmap/Telecommuting-rafiki.png" 
                          alt="映像授業" 
                          className="w-full h-full object-contain"
                        />
                      )}
                      {step.number === '02' && (
                        <img 
                          src="/roadmap/Marketing consulting-amico.png" 
                          alt="LIVE授業" 
                          className="w-full h-full object-contain"
                        />
                      )}
                      {step.number === '03' && (
                        <img 
                          src="/roadmap/Admin-rafiki.png" 
                          alt="模擬案件" 
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-2 mt-6 text-center">
                <h3 className="text-lg font-bold mb-2 bg-[linear-gradient(135deg,_#0575E6_0%,_#021B79_100%)] bg-clip-text text-transparent">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PC版: フレックス表示（カード + × + カード + × + カード） */}
        <div 
          ref={cardsRef}
          className="hidden md:flex items-start justify-between gap-2 w-full max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div 
                className={`slide-in-from-left ${isCardsInView ? 'in-view' : ''} relative`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative">
                  <div className="absolute -top-6 left-3 text-4xl font-bold z-10" style={{ color: '#2911E2' }}>
                    {step.number}
                  </div>
                  
                  <div className="bg-white rounded-2xl overflow-hidden w-80">
                    <div className="flex items-center justify-center p-4">
                      <div className="w-48 h-52">
                        {step.number === '01' && (
                          <img 
                            src="/roadmap/Telecommuting-rafiki.png" 
                            alt="映像授業" 
                            className="w-full h-full object-contain"
                          />
                        )}
                        {step.number === '02' && (
                          <img 
                            src="/roadmap/Marketing consulting-amico.png" 
                            alt="LIVE授業" 
                            className="w-full h-full object-contain"
                          />
                        )}
                        {step.number === '03' && (
                          <img 
                            src="/roadmap/Admin-rafiki.png" 
                            alt="模擬案件" 
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-2 mt-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-[linear-gradient(135deg,_#0575E6_0%,_#021B79_100%)] bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  
                  <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`slide-in-from-left ${isCardsInView ? 'in-view' : ''} flex items-center h-64 text-3xl text-black`}
                  style={{ transitionDelay: `${(index * 300) + 150}ms` }}
                >
                  ×
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap