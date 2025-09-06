import React from 'react'
import FeatureCard from '../components/FeatureCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Feature: React.FC = () => {
  const { ref: titleRef, isInView: isTitleInView } = useScrollAnimation({ threshold: 0.2 })
  const { ref: textRef, isInView: isTextInView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section id="features" className="relative -mt-20 md:-mt-20 z-10">
      {/* 円形の背景（SPとPCで曲率を分岐） */}
      {/* SP: もっと緩いカーブ */}
      <div className="absolute inset-x-0 -top-2 -bottom-2 md:hidden pointer-events-none">
        <div
          className="absolute w-[260%] h-[calc(100%+60px)] left-1/2 -translate-x-1/2 top-0"
          style={{
            background: 'linear-gradient(180deg, #0575E6 0%, #021B79 100%)',
            borderRadius: '50% 50% 50% 50% / 8% 8% 8% 8%'
          }}
        />
      </div>
      {/* PC: 既存の曲率 */}
      <div className="absolute inset-x-0 -top-10 -bottom-10 hidden md:block md:-bottom-20 pointer-events-none">
        <div 
          className="absolute w-[200%] h-[calc(100%+80px)] left-1/2 -translate-x-1/2 top-0"
          style={{ 
            background: 'linear-gradient(180deg, #0575E6 0%, #021B79 100%)',
            borderRadius: '50% 50% 50% 50% / 15% 15% 15% 15%'
          }}
        />
      </div>
      
      {/* コンテンツ */}
      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 md:px-4">
          {/* 装飾ライン */}
          <div className="flex justify-center mb-8">
            <img 
              src="/Group 163.png" 
              alt="装飾ライン" 
              className="w-64 md:w-200 h-auto"
            />
          </div>
          
          <div className="text-center">
            {/* Enginearバブル */}
            <div 
              ref={titleRef}
              className={`dynamic-bounce-up ${isTitleInView ? 'in-view' : ''} relative inline-block`}
            >
              <div className="inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 rounded-full" 
                   style={{ background: 'linear-gradient(135deg, #FC4A1A 0%, #FFAC00 100%)' }}>
                <h2 className="text-white text-base md:text-3xl font-bold" style={{ letterSpacing: '0.2rem' }}>
                  Enginearにお任せください！
                </h2>
              </div>
              {/* 下矢印 */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px]"
                     style={{ borderTopColor: '#FFAC00' }}></div>
              </div>
            </div>
          </div>
          
          {/* テキスト部分（SPは2行に繋げる） */}
          <div ref={textRef} className={`dynamic-bounce-up ${isTextInView ? 'in-view' : ''} text-center mt-8 md:mt-12`}>
            <p className="text-white text-sm md:text-2xl font-bold" style={{ letterSpacing: '0.25rem' }}>
              私たちは今本当に求められるクラウド人材を育てるために<br />
              <span className="text-lg md:text-4xl font-bold" style={{ color: '#F5E537' }}>”教材で終わらない”</span>学びにこだわりました。
            </p>
          </div>
          
          {/* Featureカード */}
          <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-6">
            <FeatureCard
              number="01"
              title='映像授業で、まず”理解”'
              description={<>いつでも見返せるオンデマンド授業で、基礎から体系的にインフラを学習。
申込後記や資格対策ではなく、<span style={{ color: '#F28130', fontWeight: 'bold' }}>「なぜそう設計するのか？」</span>を言語化する力が身につくよう構成されています。</>}
              image="/roadmap/Telecommuting-rafiki.png"
              imageAlt="映像授業のイメージ"
            />
            
            <FeatureCard
              number="02"
              title="Live授業で、手を動かす"
              description={<>週1回のライブ授業では、<span style={{ color: '#F28130', fontWeight: 'bold' }}>ハンズオン形式で構築演習を実施。</span> AWS環境を実際に触りながら、現場さながらの設定・構築・レビューを行います。疑問点はその場で質問・フィードバック可能。<span style={{ color: '#F28130', fontWeight: 'bold' }}>"独学の壁"</span>を突破します。</>}
              image="/roadmap/Marketing consulting-amico.png"
              imageAlt="Live授業のイメージ"
            />
            
            <FeatureCard
              number="03"
              title="専属コーチによる週次コーチング"
              description={<>継続できないのは、やる気がないからではなく「計画が不明確だから」 Enginearでは、<span style={{ color: '#F28130', fontWeight: 'bold' }}>専属コーチが毎週「学習計画と実行支援」</span>を行います。 映像視聴のペース管理から、日々のタスクの調整までフル伴走。<span style={{ color: '#F28130', fontWeight: 'bold' }}>"忙しくても続く仕組み"</span>を提供します。</>}
              image="/feature/Online consulting-amico.png"
              imageAlt="専属コーチによる週次コーチング"
            />
            
            <FeatureCard
              number="04"
              title="チャット質問・日報で学習を止めない"
              description={<>学習中に出てくる疑問は、<span style={{ color: '#F28130', fontWeight: 'bold' }}>チャットでいつでも質問OK。</span> さらに、受講生コミュニティで毎日日報を投稿する仕組みにより、 他の仲間と刺激し合いながら、自然と継続できます。</>}
              image="/feature/Group video-amico.png"
              imageAlt="チャット質問・日報で学習を止めない"
            />
            
            <FeatureCard
              number="05"
              title={<>SAA対策＋模擬案件で、<br />ポートフォリオ完成までサポート</>}
              description={<>カリキュラムの終盤で<span style={{ color: '#F28130', fontWeight: 'bold' }}>AWS認定 SAA 試験対策と模擬案件開発</span>を実施。 実務そのままの構成を想定したシステム構築を行い、構成図・設計意図・コードまで整理。 そのまま<span style={{ color: '#F28130', fontWeight: 'bold' }}>ポートフォリオとして企業に提出可能な状態</span>に仕上げます。</>}
              image="/roadmap/Admin-rafiki.png"
              imageAlt="SAA対策＋模擬案件"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature