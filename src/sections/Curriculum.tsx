import React from 'react'
import CurriculumCard from '../components/CurriculumCard'

const Curriculum: React.FC = () => {
  const basicItems = [
    'AWS の全体像と主要サービス',
    'ネットワークサービス（VPC<span style="color: #2911E2; font-size: 0.8em">・</span>ルーティング etc）',
    'コンピューティングサービス（EC2<span style="color: #2911E2; font-size: 0.8em">・</span>Lambda etc）',
    'ストレージサービス（S3<span style="color: #2911E2; font-size: 0.8em">・</span>EBS<span style="color: #2911E2; font-size: 0.8em">・</span>EFS）',
    'データベースサービス（RDS<span style="color: #2911E2; font-size: 0.8em">・</span>DynamoDB）'
  ]
  
  const advancedItems = [
    'コンテナ関連（Docker<span style="color: #F28130; font-size: 0.8em">・</span>ECS）',
    'インフラ管理（CloudFormation<span style="color: #F28130; font-size: 0.8em">・</span>CodeDeploy）',
    'コスト最適化（CostandUsage Report<span style="color: #F28130; font-size: 0.8em">・</span>Lambda）',
    'セキュリティサービス（WAF<span style="color: #F28130; font-size: 0.8em">・</span>GuardDuty）',
    'セキュリティサービス（AWS Shield）',
    '高可用性アーキテクチャ（ALB）<span style="color: #F28130; font-size: 0.8em">・</span>マルチリージョン）',
    'パフォーマンス<span style="color: #F28130; font-size: 0.8em">・</span>ステアリング設計',
    'コスト最適化（特定用例<span style="color: #F28130; font-size: 0.8em">・</span>モニタリング）'
  ]
  
  return (
    <section id="curriculum" className="pb-12 pt-30 sm:py-12 md:pt-20 md:mt-40 z-10" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-4 md:px-4">
        {/* タイトル */}
        <h2 className="text-center text-2xl md:text-4xl font-bold  mb-14 md:mb-20">
          実践を重視した<span style={{ color: '#2911E2' }}>カリキュラム内容</span>
        </h2>
        
        {/* カリキュラムカード */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-20 max-w-5xl mx-auto md:py-8">
          <CurriculumCard
            type="基礎学習"
            title='クラウドの<span style="color: #2911E2">”全体像”</span>を理解し、<br />インフラの基本を自分の手で操作'
            subtitle=""
            items={basicItems}
            gradient="linear-gradient(135deg, #0575E6 0%, #021B79 100%)"
          />

          {/* 中央の + 記号（SP/PCともに表示） */}
          {/* SP表示 */}
          <div className="flex justify-center items-center col-span-1 my-1 block md:hidden">
            <span className="text-5xl font-black text-black">+</span>
          </div>
          {/* PC表示（絶対配置でレイアウトに影響させない） */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <span className="text-4xl font-black text-black">+</span>
          </div>
          
          <CurriculumCard
            type="応用学習"
            title='<span style="color: #F28130">”現場で使われる”</span>構成・自動化・<br />セキュリティ設計まで幅広く学習'
            subtitle=""
            items={advancedItems}
            gradient="linear-gradient(135deg, #FC4A1A 0%, #FFAC00 100%)"
            accentColor="#F28130"
          />
        </div>
        
        {/* 装飾画像（下方向に小さくバウンス） */}
        <div className="flex justify-center mt-4">
          <img 
            src="/curriculum/Group 298.png" 
            alt="装飾" 
            className="w-20 h-20 md:w-20 md:h-20 arrow-bounce-down"
          />
        </div>
      </div>
    </section>
  )
}

export default Curriculum