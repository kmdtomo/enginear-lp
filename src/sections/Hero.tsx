import React, { useState, useEffect } from 'react';
import Parallelogram from '../components/Parallelogram';
import HeaderNav from '../components/HeaderNav';

const Hero: React.FC = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showHeaderAndCTA, setShowHeaderAndCTA] = useState(false);

  useEffect(() => {
    // タイミング調整
    const timer1 = setTimeout(() => setShowText1(true), 400);
    const timer2 = setTimeout(() => setShowText2(true), 700);
    const timer3 = setTimeout(() => setShowText3(true), 1000);
    const timer4 = setTimeout(() => setShowHeaderAndCTA(true), 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section
      data-role="hero"
      className="relative overflow-hidden w-screen h-screen"
    >
      <HeaderNav showAnimation={showHeaderAndCTA} />
      {/* PC版背景レイヤー（左右反転）。テキストには影響しない */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/Image_fx (7).jpg")`,
          transform: 'scaleX(-1.16) scaleY(1.16) translateX(-4%)',
          transformOrigin: 'center',
        }}
      />
      
      {/* SP版専用背景（反転） */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/SP/ChatGPT Image 2025年8月20日 15_52_00.png")`,
          transform: 'scaleX(-1)',
          transformOrigin: 'center',
          backgroundPosition: '100% 20%',
        }}
      />

      {/* SP版ディマー（左→右のグラデーション） */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] md:hidden"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* 背景グラデーション（左: #000000/70 → 右: #737373/0） - PC版のみ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(115,115,115,0) 100%)',
        }}
      />

      {/* 左側の画像 - テキストの下に配置 */}
      <div className="absolute left-0 bottom-0 z-0 hidden md:block">
        <img 
          src="/back-Included.png" 
          alt="" 
          className="h-[100vh] object-contain"
        />
      </div>

      {/* コンテンツレイヤー */}
      <div className="relative z-10 h-full w-full flex items-end md:items-center pb-38 sm:pb-40 md:pb-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-4">
          <div>
            <p className={`hero-text ${showText1 ? 'show' : ''} text-yellow font-bold text-base sm:text-xl md:text-2xl mb-3 sm:mb-5 md:mb-6 md:ml-16 ml-6 tracking-[0.12em] md:tracking-[0.12em]`}>
              教材だけでなく<span className="text-xl sm:text-3xl md:text-4xl relative inline-block">
                <span className="absolute -top-3 left-[25%] -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow rounded-full"></span>
                <span className="absolute -top-3 left-[75%] -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow rounded-full"></span>
                案件
              </span>で学ぶ
            </p>
            
            <div className={`hero-text ${showText2 ? 'show' : ''}`}>
              <Parallelogram bgClassName="bg-white/90" className="mb-4 sm:mb-3 md:mb-4 md:ml-10 ml-5 w-full max-w-fit mx-auto md:mx-0">
                <h1 className="m-0 leading-[1] md:leading-tight font-extrabold text-[#303263] font-sans italic whitespace-nowrap flex items-baseline tracking-[0.06em] md:tracking-[0.12em]">
                  <span className="text-3xl sm:text-5xl md:text-7xl">2ヶ月</span>
                  <span className="text-xl sm:text-3xl md:text-4xl">で</span>
                  <span className="text-3xl sm:text-5xl md:text-7xl">即戦力</span>
                  <span className="text-xl sm:text-3xl md:text-4xl">の</span>
                </h1>
              </Parallelogram>
            </div>
            
            <div className={`hero-text ${showText3 ? 'show' : ''}`}>
              <Parallelogram bgClassName="bg-white/90" className="md:ml-4 ml-2 mt-2 mb-12 sm:mb-10 md:mb-14 w-full max-w-fit mx-auto md:mx-0">
                <h2 className="m-0 leading-[1.1] md:leading-tight font-extrabold text-[#303263] font-sans italic text-3xl sm:text-4xl md:text-7xl whitespace-nowrap tracking-[0.03em] md:tracking-[0.1em]">
                  クラウドエンジニアへ
                </h2>
              </Parallelogram>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;