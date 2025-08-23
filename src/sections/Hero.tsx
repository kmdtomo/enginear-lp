import React from 'react';
import Parallelogram from '../components/Parallelogram';
import HeaderNav from '../components/HeaderNav';

const Hero: React.FC = () => {
  return (
    <section
      data-role="hero"
      className="relative overflow-hidden w-screen h-screen"
    >
      <HeaderNav />
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
            <p className="text-yellow font-bold md:text-2xl text-base md:mb-6 mb-3 md:ml-16 ml-0" style={{ letterSpacing: '0.12em' }}>
              教材だけでなく<span className="md:text-4xl text-2xl relative inline-block">
                <span className="absolute -top-3 left-[25%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                <span className="absolute -top-3 left-[75%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                案件
              </span>で学ぶ
            </p>
            
            <Parallelogram bgClassName="bg-white/90" className="mb-3 md:mb-4 md:ml-10 ml-0">
              <h1 className="m-0 leading-[1.1] md:leading-tight font-extrabold text-[#303263] font-sans italic" style={{ letterSpacing: '0.12em' }}>
                <span className="md:text-7xl text-3xl">2ヶ月</span>
                <span className="md:text-4xl text-2xl">で</span>
                <span className="md:text-7xl text-3xl">即戦力</span>
                <span className="md:text-4xl text-2xl">の</span>
              </h1>
            </Parallelogram>
            
            <Parallelogram bgClassName="bg-white/90" className="md:ml-4 ml-0 mt-2 md:mb-14 mb-8">
              <h2 className="m-0 leading-[1.1] md:leading-tight font-extrabold text-[#303263] font-sans italic md:text-7xl text-3xl" style={{ letterSpacing: '0.1em' }}>
                クラウドエンジニアへ
              </h2>
            </Parallelogram>
          </div>
        </div>
      </div>

      {/* モニター募集セクション */}
      <div className="absolute bottom-0 md:left-20 md:right-20 left-4 right-4 z-20 text-white md:py-7 py-5 rounded-t-lg" style={{ background: 'linear-gradient(135deg, rgba(5,117,230,0.8) 0%, rgba(2,27,121,0.8) 100%)' }}>
        <div className="max-w-7xl mx-auto md:px-4 px-3 flex md:flex-row flex-col md:items-center items-center justify-center md:gap-8 gap-4 text-center">
          <div className="flex flex-col md:items-center items-center gap-1">
            <p className="text-yellow md:text-xl text-sm font-medium" style={{ letterSpacing: '0.08em' }}>今だけ先着5名限定！</p>
            <p className="md:text-3xl text-xl font-bold" style={{ letterSpacing: '0.08em' }}>70%OFFでモニター募集中！</p>
          </div>
          <a href="#contact" className="inline-flex md:w-auto w-full md:justify-center justify-center items-center gap-3 bg-[#00C300] text-white rounded-full md:px-8 px-5 md:py-3 py-2 shadow md:text-lg text-base">
            <img src="/icons8-line (1).svg" alt="LINE" className="md:w-7 md:h-7 w-6 h-6" />
            <span className="inline-flex items-baseline gap-0 md:tracking-widest tracking-wide">
              <span className="md:text-xl text-lg font-bold">今すぐ無料相談</span>
              <span className="font-medium md:text-sm text-xs">を予約する</span>
            </span>
            <span className="md:text-base text-sm">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;