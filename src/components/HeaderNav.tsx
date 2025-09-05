import React from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface HeaderNavProps {
  showAnimation?: boolean
}

const HeaderNav: React.FC<HeaderNavProps> = ({ showAnimation = true }) => {
  const { handleSmoothScroll } = useSmoothScroll()

  return (
    <header className={`hero-header ${showAnimation ? 'show' : ''} absolute top-0 left-0 w-full pt-4 z-20`}>
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-end gap-6">
        {/* SP版のみロゴ表示 */}
        <div className="md:hidden">
          <div className="bg-white/80 rounded px-3 py-2">
            <span className="text-[#303263] font-bold text-sm">ロゴ</span>
          </div>
        </div>
        
        <nav aria-label="main" className="text-white hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-base">
            <li><a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className="hover:opacity-70 transition-opacity" style={{ color: 'white' }}>サービスの特徴</a></li>
            <li><a href="#curriculum" onClick={(e) => handleSmoothScroll(e, '#curriculum')} className="hover:opacity-70 transition-opacity" style={{ color: 'white' }}>カリキュラム</a></li>
            <li><a href="#flow" onClick={(e) => handleSmoothScroll(e, '#flow')} className="hover:opacity-70 transition-opacity" style={{ color: 'white' }}>受講までの流れ</a></li>
            <li><a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')} className="hover:opacity-70 transition-opacity" style={{ color: 'white' }}>料金プラン</a></li>
            <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')} className="hover:opacity-70 transition-opacity" style={{ color: 'white' }}>よくある質問</a></li>
          </ul>
        </nav>
        <a 
          href="https://step.lme.jp/landing-qr/2008018288-6lzxd9ez?uLand=l1YIlF" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00C300] text-white !text-white font-medium text-sm sm:text-sm md:text-sm rounded-full px-5 sm:px-6 md:px-6 py-2.5 shadow transform transition-all duration-150 hover:scale-95 active:scale-90"
        >
          <img src="/icons8-line (1).svg" alt="LINE" className="w-6 h-6 md:w-6 md:h-6" />
          <span className="hidden sm:inline">無料でお問い合わせ</span>
          <span className="sm:hidden">お問い合わせ</span>
        </a>
      </div>
    </header>
  )
}

export default HeaderNav


