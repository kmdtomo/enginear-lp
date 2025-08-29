import React from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const Footer: React.FC = () => {
  const { handleSmoothScroll } = useSmoothScroll()
  return (
    <footer 
      id="footer"
      className="py-12 md:py-16 text-white"
      style={{ 
        background: 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid md:grid-cols-2 items-center">
          {/* 左カラム */}
          <div className="flex flex-col justify-center"
          >
            <p 
              className="text-xl md:text-lg font-bold leading-relaxed mb-6"
              style={{ letterSpacing: '0.1em' }}
            >
              まずは一度、無料相談でお気軽にご相談ください。
              <br />
              あなたの状況に合わせて、最適なプランを一緒に考えましょう。
            </p>
            <p className="text-sm opacity-80">
              ※先着5名限定のモニター価格98,000円でのご案内は、定員に達し次第終了します。
            </p>
          </div>
          
          {/* 右カラム */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex w-full md:w-auto justify-center items-center gap-3 bg-[#00C300] text-white rounded-full px-8 py-3 shadow text-lg transform transition-all duration-150 hover:scale-95 active:scale-90"
            >
              <img src="/icons8-line (1).svg" alt="LINE" className="w-7 h-7" />
              <span className="inline-flex items-baseline gap-0 tracking-wide">
                <span className="text-xl font-bold">今すぐ無料相談</span>
                <span className="font-medium text-sm">を予約する</span>
              </span>
              <span className="text-base">▶</span>
            </a>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-white/60 text-center">
          <p className="text-sm opacity-80">© Enginear Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer