import React from 'react'
import SpeechBubble from '../components/SpeechBubble'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Challenge: React.FC = () => {
  const { ref: bubblesRef, isInView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section className="relative bg-[#F5F6FC] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* タイトル部分 */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black" style={{ letterSpacing: '0.15rem' }}>
            未経験から<span className="relative inline-block" style={{ color: '#2911E2' }}>
              <span className="absolute -top-3 left-[12.5%] -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#2911E2' }}></span>
              <span className="absolute -top-3 left-[37.5%] -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#2911E2' }}></span>
              <span className="absolute -top-3 left-[62.5%] -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#2911E2' }}></span>
              <span className="absolute -top-3 left-[87.5%] -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#2911E2' }}></span>
              クラウド
            </span>ってそんなに甘くない
          </h2>
          <p className="text-base md:text-2xl text-black font-bold" style={{ letterSpacing: '0.15rem' }}>
            そう思っていませんか？
          </p>
        </div>

        {/* コンテンツ部分 */}
        <div className="relative max-w-6xl mx-auto">
          {/* モバイル版レイアウト */}
          <div className="md:hidden">
            <div className="flex justify-center mb-8">
              <div className="w-48">
                <img 
                  src="/challenge/Shrug-pana.png" 
                  alt="悩む人のイラスト" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* モバイル版の吹き出し - 下に4つ並べる */}
            <div ref={bubblesRef} className="grid grid-cols-2 gap-4">
              <div className={`slide-from-top-left ${isInView ? 'in-view' : ''} flex justify-center`}>
                <SpeechBubble className="px-8 py-4">
                  <div className="text-center font-medium text-black">
                    <p className="text-xs tracking-wide whitespace-nowrap">技術書読んでも</p>
                    <p className="text-xs tracking-wide whitespace-nowrap">"実務で何をやるか"がわからない。</p>
                  </div>
                </SpeechBubble>
              </div>
              <div className={`slide-from-top-right ${isInView ? 'in-view' : ''} flex justify-center`}>
                <SpeechBubble className="px-8 py-4">
                  <div className="text-center font-medium text-black">
                    <p className="text-xs tracking-wide">忙しくて毎日勉強できないし、</p>
                    <p className="text-xs tracking-wide">自分には無理かも</p>
                  </div>
                </SpeechBubble>
              </div>
              <div className={`slide-from-bottom-left ${isInView ? 'in-view' : ''} flex justify-center`}>
                <SpeechBubble className="px-8 py-4">
                  <div className="text-center font-medium text-black">
                    <p className="text-xs tracking-wide">独学だと挫折しそうで</p>
                    <p className="text-xs tracking-wide">続けられる自信がない</p>
                  </div>
                </SpeechBubble>
              </div>
              <div className={`slide-from-bottom-right ${isInView ? 'in-view' : ''} flex justify-center`}>
                <SpeechBubble className="px-8 py-4">
                  <div className="text-center font-medium text-black">
                    <p className="text-xs tracking-wide">自分とは違う分野だから、</p>
                    <p className="text-xs tracking-wide">一から学び直すのは気が引ける</p>
                  </div>
                </SpeechBubble>
              </div>
            </div>
          </div>

          {/* PC版レイアウト */}
          <div ref={bubblesRef} className="hidden md:flex md:items-start md:justify-center md:gap-8">
            {/* 左側の吹き出し */}
            <div className="space-y-4 flex flex-col items-end">
              <div className={`slide-from-top-left ${isInView ? 'in-view' : ''}`}>
                <SpeechBubble className="px-14 py-4 mt-[-10px] mr-[-100px]">
                  <div className="text-center font-medium text-black">
                    <p className="text-lg tracking-widest whitespace-nowrap">技術書読んでも</p>
                    <p className="text-lg tracking-widest whitespace-nowrap">"実務で何をやるか"がわからない。</p>
                  </div>
                </SpeechBubble>
              </div>
              <div className={`slide-from-bottom-left ${isInView ? 'in-view' : ''}`}>
                <SpeechBubble className="px-14 py-4 mt-12 mr-[-40px]">
                  <div className="text-center font-medium text-black">
                    <p className="text-lg tracking-widest whitespace-nowrap">独学だと挫折しそうで</p>
                    <p className="text-lg tracking-widest whitespace-nowrap">続けられる自信がない</p>
                  </div>
                </SpeechBubble>
              </div>
            </div>

            {/* 中央のイラスト */}
            <div className="flex justify-center mx-8 mt-18 z-50 relative">
              <div className="w-64">
                <img 
                  src="/challenge/Shrug-pana.png" 
                  alt="悩む人のイラスト" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* 右側の吹き出し */}
            <div className="space-y-4 flex flex-col items-start">
              <div className={`slide-from-top-right ${isInView ? 'in-view' : ''}`}>
                <SpeechBubble className="px-14 py-4 mt-4 ml-[-120px] mt-8">
                  <div className="text-center font-medium text-black">
                    <p className="text-lg tracking-widest whitespace-nowrap">忙しくて毎日勉強できないし、</p>
                    <p className="text-lg tracking-widest whitespace-nowrap">自分には無理かも</p>
                  </div>
                </SpeechBubble>
              </div>
              <div className={`slide-from-bottom-right ${isInView ? 'in-view' : ''}`}>
                <SpeechBubble className="px-14 py-4 mt-12 ml-[-80px]">
                  <div className="text-center font-medium text-black">
                    <p className="text-lg tracking-widest whitespace-nowrap">自分とは違う分野だから、</p>
                    <p className="text-lg tracking-widest whitespace-nowrap">一から学び直すのは気が引ける</p>
                  </div>
                </SpeechBubble>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenge