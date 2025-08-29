import React from 'react'

const Flow: React.FC = () => {
  return (
    <section className="py-12 md:py-12" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-[1250px] mx-auto px-4">
        {/* タイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            受講までの流れ
          </h2>
          <p className="text-orange-500 font-bold text-lg">FLOW</p>
        </div>
        
        {/* フローステップ */}
        <div className="grid md:grid-cols-4 gap-2 md:gap-4 w-full mx-auto">
          {/* ステップ1 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                1
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-56 h-56 rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Search engines-amico.png" 
                  alt="無料相談申し込み" 
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトルとボタン */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                無料相談申し込み
              </h3>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#00C300] text-white rounded-full px-6 py-2.5 shadow text-sm font-bold hover:opacity-90 transition-opacity">
                <span className="text-white" style={{ letterSpacing: '0.15rem' }}>無料相談を予約する</span>
              </a>
              <p className="mt-3 text-sm text-black">
                まずは、お気軽にお申し込みください
              </p>
            </div>
          </div>
          
          {/* ステップ2 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                2
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-56 h-56 rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Live collaboration-pana.png" 
                  alt="無料相談実施" 
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトル */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2911E2' }}>
                無料相談実施
              </h3>
              <p className="text-sm text-black mb-3">
                現状のお悩みから受講に関すること<br />
                まで、なんでもご相談ください。
              </p>
              <ul className="text-sm text-black space-y-1 text-left inline-block">
                <li className="font-bold whitespace-nowrap">・学べる内容について詳しく知りたい</li>
                <li className="font-bold whitespace-nowrap">・自分でもできるか相談したい</li>
                <li className="font-bold whitespace-nowrap">・悩み事を相談したい</li>
              </ul>
            </div>
          </div>
          
          {/* ステップ3 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                3
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-56 h-56 rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Work in progress-cuate.png" 
                  alt="受講申し込み" 
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトルとボタン */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                受講申し込み
              </h3>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#00C300] text-white rounded-full px-6 py-2.5 shadow text-sm font-bold hover:opacity-90 transition-opacity">
                <span className="text-white" style={{ letterSpacing: '0.15rem' }}>コースに申し込む</span>
              </a>
              <p className="mt-3 text-sm text-black">
                無料相談後、内容にご納得いただけましたら<br />
                銀行振込／オンライン決済（カード／分割可）<br />
                でお申し込みが可能です。<br />
                <span className="font-bold">今なら7日間全額返金保証。</span>
              </p>
            </div>
          </div>
          
          {/* ステップ4 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-3 text-5xl font-bold z-10" style={{ color: '#2911E2' }}>
                4
              </div>
              
              {/* 円形の外枠 */}
              <div className="w-56 h-56 rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#D8DFFF' }}>
                {/* アイコン画像 */}
                <img 
                  src="/flow/Programmer-rafiki (1).png" 
                  alt="受講開始" 
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
            
            {/* タイトル */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2911E2', letterSpacing: '0.15rem' }}>
                受講開始
              </h3>
              <div className="text-sm text-black space-y-1">
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