import React from 'react'

const HeaderNav: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-end gap-6">
        <nav aria-label="main" className="text-white hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-base">
            <li><a href="#features" className="text-white">サービスの特徴</a></li>
            <li><a href="#curriculum" className="text-white">カリキュラム</a></li>
            <li><a href="#flow" className="text-white">受講までの流れ</a></li>
            <li><a href="#pricing" className="text-white">料金プラン</a></li>
            <li><a href="#faq" className="text-white">よくある質問</a></li>
          </ul>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 bg-[#00C300] text-white !text-white font-medium text-xs rounded-full px-4 py-1.5 shadow">
          <img src="/icons8-line (1).svg" alt="LINE" width={20} height={20} />
          無料でお問い合わせ
        </a>
      </div>
    </header>
  )
}

export default HeaderNav


