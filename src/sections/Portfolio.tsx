import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Portfolio: React.FC = () => {
  const { ref: bannerRef, isInView: isBannerInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: card1Ref, isInView: isCard1InView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: card2Ref, isInView: isCard2InView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: listRef, isInView: isListInView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section className="py-12 md:pb-20 md:-mt-10" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* メインバナー */}
        <div 
          ref={bannerRef}
          className={`scale-in ${isBannerInView ? 'in-view' : ''} rounded-lg p-6 md:p-6 text-center text-white`}
          style={{ 
            background: 'linear-gradient(135deg, #5433FF 0%, #0575E6 100%)'
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold" style={{ letterSpacing: '0.2rem' }}>
            SAAの資格取得と、自分の"手で作った証拠"を武器に、
            <span className="text-yellow">キャリアを加速</span>
          </h2>
        </div>
        
        {/* コンテンツ部分 */}
        <div className="mt-12">
          {/* 実務レベルカード */}
          <div ref={card1Ref} className={`slide-in-from-left ${isCard1InView ? 'in-view' : ''} max-w-5xl mx-auto flex justify-center ml-10`}>
            <div className="md:flex items-center">
              {/* 左側：テキストコンテンツ */}
              <div className="md:w-1/2 pt-8">
                <h3 className="text-3xl font-bold mb-5" style={{ letterSpacing: '0.15rem' }}>
                  実務レベルの<span style={{ color: '#2911E2' }}>”模擬案件”</span>に参加
                </h3>
                <div 
                  className="h-0.5 w-full mb-5"
                  style={{ background: 'linear-gradient(135deg, #5433FF 0%, #0575E6 100%)' }}
                />
                <p className="text-gray-700 text-base mb-6" style={{ lineHeight: '2.0' }}>
                  実際の企業案件を想定した要件定義からエンジニアが現場で行う業務を
                  <span className="font-bold" style={{ color: '#F28130' }}>一気通貫</span>
                  で経験します。最大1ヶ月間のプロジェクト形式で進行し、メンターからのレビューを受けながら、
                  <span className="font-bold" style={{ color: '#F28130' }}>実務レベルの開発スキルを身につけます。</span>
                </p>
              </div>
              
              {/* 右側：画像 */}
              <div className="md:w-1/2 flex items-center justify-center">
                <img 
                  src="/curriculum/Data points-cuate (1).png" 
                  alt="模擬案件イメージ" 
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </div>
          </div>
          
          {/* 2つ目のカード - 左右入れ替え */}
          <div ref={card2Ref} className="max-w-5xl mx-auto flex justify-center mt-5 ml-20">
            <div className={`slide-from-right ${isCard2InView ? 'in-view' : ''} md:flex items-center`}>
              {/* 左側：画像 */}
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/curriculum/Data extraction-amico (1).png" 
                  alt="SAAとポートフォリオ作成イメージ" 
                  className="w-full h-auto max-w-xs"
                />
              </div>
              
              {/* 右側：テキストコンテンツ */}
              <div className="md:w-2/3 pt-8 md:pl-8">
                <h3 className="text-3xl font-bold mb-5" style={{ letterSpacing: '0.15rem' }}>
                  <span style={{ color: '#2911E2' }}>SAA</span>の取得と<span style={{ color: '#2911E2' }}>ポートフォリオ作成</span>
                </h3>
                <div 
                  className="h-0.5 w-full mb-5"
                  style={{ background: 'linear-gradient(135deg, #5433FF 0%, #0575E6 100%)' }}
                />
                <div ref={listRef}>
                  <ul className="space-y-3 text-gray-700 text-base">
                    <li className={`fade-in-up ${isListInView ? 'in-view' : ''} flex items-center delay-100`}>
                      <span className="mr-2 text-[10px]" style={{ color: '#2911E2' }}>●</span>
                      <span>AWS認定 SAA 試験対策講座</span>
                    </li>
                    <li className={`fade-in-up ${isListInView ? 'in-view' : ''} flex items-center delay-200`}>
                      <span className="mr-2 text-[10px]" style={{ color: '#2911E2' }}>●</span>
                      <span>試験範囲の復習＋模擬試験</span>
                    </li>
                    <li className={`fade-in-up ${isListInView ? 'in-view' : ''} flex items-center delay-300`}>
                      <span className="mr-2 text-[10px]" style={{ color: '#2911E2' }}>●</span>
                      <span>ポートフォリオ最終化（GitHub提出形式・面接用資料）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio