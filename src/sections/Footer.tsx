import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer 
      id="footer"
      className="py-8 sm:py-10 md:py-16 text-white"
      style={{ 
        background: 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)'
      }}
    >
      <div className="max-w-7xl w-11/12 md:w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
          {/* 左カラム */}
          <div className="flex flex-col justify-center text-left">
            <p 
              className="text-sm sm:text-lg md:text-lg font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6"
              style={{ letterSpacing: '0.1em' }}
            >
              まずは一度、無料相談でお気軽にご相談ください。
              <br />
              あなたの状況に合わせて、最適なプランを一緒に考えましょう。
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              ※先着5名限定のモニター価格98,000円でのご案内は、定員に達し次第終了します。
            </p>
          </div>
          
          {/* 右カラム */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="https://step.lme.jp/landing-qr/2008018288-6lzxd9ez?uLand=l1YIlF" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto md:w-auto justify-center items-center gap-2 sm:gap-3 bg-[#00C300] text-white rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shadow text-sm sm:text-base md:text-lg transform transition-all duration-150 hover:scale-95 active:scale-90"
            >
              <img src="/icons8-line (1).svg" alt="LINE" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span className="inline-flex items-baseline gap-0 tracking-wide">
                <span className="text-base sm:text-lg md:text-xl font-bold">今すぐ無料相談</span>
                <span className="font-medium text-xs sm:text-xs md:text-sm">を予約する</span>
              </span>
              <span className="text-sm sm:text-sm md:text-base">▶</span>
            </a>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-6 md:pt-8 border-t border-white/60 text-center">
          <p className="text-xs sm:text-sm opacity-80">© Enginear Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer