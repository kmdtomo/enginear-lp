import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Flow: React.FC = () => {
  const { ref: titleRef, isInView: isTitleInView } = useScrollAnimation({ threshold: 0.3, rootMargin: '-50px' })
  const { ref: flowRef, isInView: isFlowInView } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' })
  return (
    <section id="flow" className="py-16 sm:py-12 md:py-12" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-[1250px] mx-auto px-6 sm:px-4 md:px-4">
        {/* タイトル */}
        <div ref={titleRef} className={`fade-in-up ${isTitleInView ? 'in-view' : ''} text-center mb-16`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            受講までの流れ
          </h2>
          <p className="text-orange-500 font-bold text-lg">FLOW</p>
        </div>
        
        {/* フローステップ */}
        <div ref={flowRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-6 md:gap-4 w-full mx-auto">
          {/* ステップ1 */}
          <div className={`stagger-item ${isFlowInView ? 'in-view' : ''} flex flex-col items-center`}>
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                1
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-52 h-52 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[6px] sm:border-4 md:border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Search engines-amico.png" 
                  alt="無料相談申し込み" 
                  className="w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトルとボタン */}
            <div className="mt-8 sm:mt-6 text-center">
              <h3 className="md:text-xl text-lg font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                無料相談申し込み
              </h3>
              <a href="https://step.lme.jp/landing-qr/2008018288-6lzxd9ez?uLand=l1YIlF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00C300] text-white rounded-full px-5 sm:px-6 py-2.5 shadow text-xs sm:text-sm font-bold hover:opacity-90 transition-all hover:scale-95">
                <span className="text-white" style={{ letterSpacing: '0.15rem' }}>無料相談を予約する</span>
              </a>
              <p className="mt-3 md:text-sm text-xs text-black">
                まずは、お気軽にお申し込みください
              </p>
            </div>
          </div>
          
          {/* ステップ2 */}
          <div className={`stagger-item ${isFlowInView ? 'in-view' : ''} flex flex-col items-center delay-300`}>
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                2
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-52 h-52 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[6px] sm:border-4 md:border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Live collaboration-pana.png" 
                  alt="無料相談実施" 
                  className="w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトル */}
            <div className="mt-8 sm:mt-6 text-center">
              <h3 className="md:text-xl text-lg font-bold mb-4" style={{ color: '#2911E2' }}>
                無料相談実施
              </h3>
              <p className="md:text-sm text-xs text-black mb-3">
                現状のお悩みから受講に関すること<br />
                まで、なんでもご相談ください。
              </p>
              <ul className="md:text-sm text-xs text-black space-y-1 text-left inline-block">
                <li className="font-bold whitespace-nowrap">・学べる内容について詳しく知りたい</li>
                <li className="font-bold whitespace-nowrap">・自分でもできるか相談したい</li>
                <li className="font-bold whitespace-nowrap">・悩み事を相談したい</li>
              </ul>
            </div>
          </div>
          
          {/* ステップ3 */}
          <div className={`stagger-item ${isFlowInView ? 'in-view' : ''} flex flex-col items-center delay-600`}>
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                3
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-52 h-52 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[6px] sm:border-4 md:border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Work in progress-cuate.png" 
                  alt="受講申し込み" 
                  className="w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトルとボタン */}
            <div className="mt-8 sm:mt-6 text-center">
              <h3 className="md:text-xl text-lg font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                受講申し込み
              </h3>
              <a href="https://step.lme.jp/landing-qr/2008018288-6lzxd9ez?uLand=l1YIlF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00C300] text-white rounded-full px-5 sm:px-6 py-2.5 shadow text-xs sm:text-sm font-bold hover:opacity-90 transition-all hover:scale-95">
                <span className="text-white" style={{ letterSpacing: '0.15rem' }}>コースに申し込む</span>
              </a>
              <p className="mt-3 md:text-sm text-xs text-black">
                無料相談後、内容にご納得いただけましたら
                <span className="block mt-2 sm:mt-0">銀行振込／オンライン決済（カード／分割可）</span>
                <span className="block mt-2 sm:mt-0">でお申し込みが可能です。</span>
                <span className="block mt-2 sm:mt-0"><span className="font-bold">今なら7日間全額返金保証。</span></span>
              </p>
            </div>
          </div>
          
          {/* ステップ4 */}
          <div className={`stagger-item ${isFlowInView ? 'in-view' : ''} flex flex-col items-center`} style={{ transitionDelay: '0.9s' }}>
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                4
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-52 h-52 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[6px] sm:border-4 md:border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Programmer-rafiki (1).png" 
                  alt="受講開始" 
                  className="w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトル */}
            <div className="mt-8 sm:mt-6 text-center">
              <h3 className="md:text-xl text-lg font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                受講開始
              </h3>
              <div className="md:text-sm text-xs text-black space-y-1">
                <p>・申込時に決定した日程より受講開始。</p>
                <p>・学習環境の設定→初回コーチングにて</p>
                <p>&nbsp;&nbsp;計画作成→受講開始へ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flow