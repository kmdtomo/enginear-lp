import React from 'react'
import OrangeArrow from '../components/OrangeArrow'
import ServiceTag from '../components/ServiceTag'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Price: React.FC = () => {
  const { ref: priceRef, isInView: isPriceInView } = useScrollAnimation({ threshold: 0.2 })
  const { ref: serviceRef, isInView: isServiceInView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section id="pricing" className="py-4 sm:py-12 md:py-20" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-4 md:px-4">
        {/* タイトル */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Enginearの料金プラン
          </h2>
          <p className="text-orange-500 font-bold text-lg">PRICE</p>
        </div>
        
        {/* 料金カードセクション */}
        <div 
          ref={priceRef}
          className={`fade-in-up ${isPriceInView ? 'in-view' : ''} grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-11/12 mx-auto md:w-full`}
        >
          {/* 左カラム - 料金カード */}
          <div className="order-2 md:order-1">
            {/* 限定オファーバー */}
            <div 
              className="text-white text-center py-3 px-4 mb-0"
              style={{ 
                background: 'linear-gradient(135deg, #0575E6 0%, #021B79 100%)'
              }}
            >
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold" style={{ letterSpacing: '0.2rem' }}>今なら先着5名限定</p>
            </div>
            
            {/* 料金詳細 */}
            <div className="pt-8">
              <div className="flex gap-0 items-center">
                {/* 左側 - 70% OFF と元価格 */}
                <div>
                  {/* 70% OFF 矢印 */}
                  <OrangeArrow className="w-22 h-8 mb-2 text-sm">
                    70% OFF
                  </OrangeArrow>
                  
                  <div>
                    <p className="text-sm font-medium text-black">受講料金</p>
                    <p className="text-xl sm:text-2xl md:text-2xl text-black">
                      <span className="line-through">¥338,000</span><span className="text-xs">(税込)</span>
                    </p>
                  </div>
                </div>
                
                {/* 右側 - 現在価格 */}
                <div className="text-left ml-4">
                  <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-black">
                    ¥98,000<span className="text-xs sm:text-base font-normal">(税込)</span>
                  </p>
                </div>
              </div>
              
              {/* 受講期間と支払い方法 */}
              <div className="mt-8 border-t border-black pt-4">
                <div className="mb-4 flex justify-center">
                  <div className="flex items-center gap-8">
                    <p className="text-base text-black flex-shrink-0 w-24">受講期間</p>
                    <div className="text-left">
                      <p className="text-lg font-bold text-black">60日間</p>
                      <p className="text-lg font-normal text-black">
                        (学習コンテンツは<span className="font-bold" style={{ color: '#2911E2', textDecoration: 'underline', textDecorationColor: '#2911E2' }}>永年無料</span>で見放題)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-black pt-4 pb-4 border-b flex justify-center">
                  <div className="flex items-center gap-8">
                    <p className="text-base text-black flex-shrink-0 w-24">支払い方法</p>
                    <p className="text-lg font-bold text-black">
                      クレジットカード（分割可）/ 銀行振込
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右カラム - イラスト（SPは非表示、PCのみ表示） */}
          <div className="hidden md:flex justify-center order-1 md:order-2">
            <img 
              src="/price/Finance-amico.png" 
              alt="Finance illustration" 
              className="w-64 sm:w-80 md:w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
        
        {/* 含まれるサービス */}
        <div 
          ref={serviceRef}
          className={`fade-in-up ${isServiceInView ? 'in-view' : ''} md:mt-6 mt-10 w-11/12 md:w-full max-w-4xl mx-auto`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative border rounded-lg p-6 pt-10 md:border-2 md:p-8 md:pt-12" style={{ borderColor: '#2911E2' }}>
            {/* ヘッダー */}
            <div className="absolute -top-5 inset-x-4 z-10 md:left-1/2 md:-translate-x-1/2 md:inset-x-auto">
              <div 
                className="text-white font-bold text-sm inline-flex justify-center items-center w-full p-2 rounded-full md:w-auto md:text-lg md:px-8 md:py-3"
                style={{ backgroundColor: '#2911E2' }}
              >
                <span className="whitespace-nowrap">含まれる全てのサービス</span>
              </div>
            </div>
            
            {/* サービス項目（SPは横長に揃える） */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:flex md:flex-wrap md:justify-center md:gap-4">
              <ServiceTag>映像授業（基礎〜応用）</ServiceTag>
              <ServiceTag>模擬案件＋SAA試験対策</ServiceTag>
              <ServiceTag>チャット質問対応</ServiceTag>
              <ServiceTag>週1ライブ授業による添削付きハンズオン</ServiceTag>
              <ServiceTag>ポートフォリオ完成支援</ServiceTag>
              <ServiceTag>専属コーチによる週次コーチング</ServiceTag>
              <ServiceTag>学習コミュニティ＋日報投稿</ServiceTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price