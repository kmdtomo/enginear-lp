import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Demand: React.FC = () => {
  const { ref: titleRef, isInView: isTitleInView } = useScrollAnimation({ threshold: 0.3 })
  const { ref: statsRef, isInView: isStatsInView } = useScrollAnimation({ threshold: 0.1, rootMargin: '-50px' })
  const { ref: mobileStatsRef, isInView: isMobileStatsInView } = useScrollAnimation({ threshold: 0.1 })
  const stats = [
    {
      label: '求人倍率',
      value: '25.4',
      unit: '倍',
      suffix: '上昇',
      description: '過去稀に見ない、IT職種最大級の売り手市場'
    },
    {
      label: 'AWS関連求人',
      value: '8,300',
      unit: '件超',
      description: '前年比+18%で増加、この数値は4年後も継続予測'
    },
    {
      label: '平均年収',
      value: '509~755',
      unit: '万円',
      description: '全エンジニア平均より+50〜250万円'
    }
  ]

  return (
    <section className="relative bg-[#F5F6FC] py-12 md:pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* 見出し部分 */}
        <div className="mb-12 md:mb-16 text-center">
          {/* グラデーション背景の見出し - 縦並び */}
          <div ref={titleRef} className="flex flex-col items-center gap-6">
            <div className={`fade-in-up ${isTitleInView ? 'in-view' : ''} bg-[linear-gradient(135deg,_#0575E6_0%,_#021B79_100%)] px-6 py-3 md:px-5 md:py-3`}>
              <h2 className="text-xl md:text-xl font-medium text-white" style={{ letterSpacing: '0.2em' }}>
                クラウド移行の加速によって
              </h2>
            </div>
            <div className={`fade-in-up ${isTitleInView ? 'in-view' : ''} bg-[linear-gradient(135deg,_#0575E6_0%,_#021B79_100%)] px-6 py-3 md:px-6 md:py-3 delay-200`}>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ letterSpacing: '0.2em' }}>
                AWSエンジニアの需要が急増中
              </h2>
            </div>
          </div>
        </div>

        {/* 統計部分 - モバイル版 */}
        <div ref={mobileStatsRef} className="md:hidden space-y-8">
          {stats.map((stat, index) => (
            <div key={index} className={`fade-in-up ${isMobileStatsInView ? 'in-view' : ''} text-left`} style={{ transitionDelay: `${index * 200}ms` }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#2911E2' }}>
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: '#2911E2' }}>
                  {stat.value}
                </span>
                <span className="text-2xl" style={{ color: '#2911E2' }}>
                  {stat.unit}
                </span>
                {stat.suffix && (
                  <span className="text-lg" style={{ color: '#2911E2' }}>
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 統計部分 - PC版 */}
        <div ref={statsRef} className="hidden md:flex md:items-start md:justify-center md:gap-12">
          {/* 求人倍率 */}
          <div className={`scale-in ${isStatsInView ? 'in-view' : ''} text-left`}>
            <p className="text-lg font-medium mb-3" style={{ color: '#2911E2' }}>
              {stats[0].label}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-7xl font-bold" style={{ color: '#2911E2' }}>
                {stats[0].value}
              </span>
              <span className="text-4xl font-medium" style={{ color: '#2911E2' }}>
                {stats[0].unit}
              </span>
              {stats[0].suffix && (
                <span className="text-2xl" style={{ color: '#2911E2' }}>
                  {stats[0].suffix}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {stats[0].description}
            </p>
          </div>
          
          {/* 縦線 */}
          <div className="mx-2">
            <div className="w-0.5 h-32 bg-gray-400"></div>
          </div>
          
          {/* AWS関連求人 */}
          <div className={`scale-in ${isStatsInView ? 'in-view' : ''} text-left delay-300`}>
            <p className="text-lg font-medium mb-3" style={{ color: '#2911E2' }}>
              {stats[1].label}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-7xl font-bold" style={{ color: '#2911E2' }}>
                {stats[1].value}
              </span>
              <span className="text-4xl font-medium" style={{ color: '#2911E2' }}>
                {stats[1].unit}
              </span>
              {stats[1].suffix && (
                <span className="text-2xl" style={{ color: '#2911E2' }}>
                  {stats[1].suffix}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {stats[1].description}
            </p>
          </div>
          
          {/* 縦線 */}
          <div className="mx-2">
            <div className="w-0.5 h-32 bg-gray-400"></div>
          </div>
          
          {/* 平均年収 */}
          <div className={`scale-in ${isStatsInView ? 'in-view' : ''} text-left delay-600`}>
            <p className="text-lg font-medium mb-3" style={{ color: '#2911E2' }}>
              {stats[2].label}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-7xl font-bold" style={{ color: '#2911E2' }}>
                {stats[2].value}
              </span>
              <span className="text-4xl font-medium" style={{ color: '#2911E2' }}>
                {stats[2].unit}
              </span>
              {stats[2].suffix && (
                <span className="text-2xl" style={{ color: '#2911E2' }}>
                  {stats[2].suffix}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {stats[2].description}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Demand