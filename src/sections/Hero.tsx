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
      <div className="absolute left-0 bottom-0 z-0">
        <img 
          src="/back-Included.png" 
          alt="" 
          className="h-[100vh] object-contain"
        />
      </div>

      {/* コンテンツレイヤー */}
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div>
            <p className="text-yellow font-bold text-2xl mb-6 ml-16" style={{ letterSpacing: '0.15em' }}>
              教材だけでなく<span className="text-4xl relative inline-block">
                <span className="absolute -top-3 left-[25%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                <span className="absolute -top-3 left-[75%] -translate-x-1/2 w-2 h-2 bg-yellow rounded-full"></span>
                案件
              </span>で学ぶ
            </p>
            
            <Parallelogram bgClassName="bg-white/90" className="mb-4 ml-10">
              <h1 className="font-extrabold text-[#303263] font-sans italic" style={{ letterSpacing: '0.15em' }}>
                <span className="text-7xl">2ヶ月</span>
                <span className="text-4xl">で</span>
                <span className="text-7xl">即戦力</span>
                <span className="text-4xl">の</span>
              </h1>
            </Parallelogram>
            
            <Parallelogram bgClassName="bg-white/90" className="ml-4 mt-2 mb-14">
              <h2 className="font-extrabold text-[#303263] font-sans italic text-7xl" style={{ letterSpacing: '0.11em' }}>
                クラウドエンジニアへ
              </h2>
            </Parallelogram>
          </div>
        </div>
      </div>

      {/* モニター募集セクション */}
      <div className="absolute bottom-0 left-20 right-20 z-20 text-white py-7 rounded-t-lg" style={{ background: 'linear-gradient(135deg, rgba(5,117,230,0.8) 0%, rgba(2,27,121,0.8) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-yellow text-xl font-medium" style={{ letterSpacing: '0.1em' }}>今だけ先着5名限定！</p>
            <p className="text-3xl font-bold" style={{ letterSpacing: '0.1em' }}>70%OFFでモニター募集中！</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#00C300] text-white rounded-full px-8 py-3 shadow text-lg">
            <img src="/icons8-line (1).svg" alt="LINE" width={36} height={36} />
            <span className="inline-flex items-baseline gap-0 tracking-widest">
              <span className="text-xl font-bold">今すぐ無料相談</span>
              <span className="font-medium text-sm">を予約する</span>
            </span>
            <span className="text-base">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;