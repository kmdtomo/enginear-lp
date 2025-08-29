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
      {/* 背景レイヤー（左右反転）。テキストには影響しない */}
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/Image_fx (7).jpg")`,
          transform: 'scaleX(-1.16) scaleY(1.16) translateX(-4%)',
          transformOrigin: 'center',
        }}
      />

      {/* 背景グラデーション（左: #000000/70 → 右: #737373/0） */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5]"
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
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-4 px-3">
          <div>
            <p className={`hero-text ${showText1 ? 'show' : ''} text-yellow font-bold md:text-2xl text-base md:mb-6 mb-3 md:ml-16 ml-0`} style={{ letterSpacing: '0.12em' }}>
              教材だけでなく<span className="md:text-4xl text-2xl relative inline-block">
                <span className="absolute -top-3 left-[25%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                <span className="absolute -top-3 left-[75%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                案件
              </span>で学ぶ
            </p>
            
            <div className={`hero-text ${showText2 ? 'show' : ''}`}>
              <Parallelogram bgClassName="bg-white/90" className="mb-3 md:mb-4 md:ml-10 ml-0">
                <h1 className="m-0 leading-[1.1] md:leading-tight font-extrabold text-[#303263] font-sans italic" style={{ letterSpacing: '0.12em' }}>
                  <span className="md:text-7xl text-3xl">2ヶ月</span>
                  <span className="md:text-4xl text-2xl">で</span>
                  <span className="md:text-7xl text-3xl">即戦力</span>
                  <span className="md:text-4xl text-2xl">の</span>
                </h1>
              </Parallelogram>
            </div>
            
            <div className={`hero-text ${showText3 ? 'show' : ''}`}>
              <Parallelogram bgClassName="bg-white/90" className="md:ml-4 ml-0 mt-2 md:mb-14 mb-8">
                <h2 className="m-0 leading-[1.1] md:leading-tight font-extrabold text-[#303263] font-sans italic md:text-7xl text-3xl" style={{ letterSpacing: '0.1em' }}>
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