import React from 'react'
import FAQItem from '../components/FAQItem'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQ: React.FC = () => {
  const { ref: titleRef, isInView: isTitleInView } = useScrollAnimation({ threshold: 0.2 })
  const faqs = [
    {
      question: '本当に未経験でも2ヶ月でクラウドエンジニアになれますか？',
      answer: 'はい、可能です。\nEnginearでは基礎から応用、実務想定の模擬案件まで段階的に学べるため、未経験の方でも確実にスキルアップできます。週1回のコーチングで「何を・いつ・どうやるか」が明確になるため、迷わず進めます。'
    },
    {
      question: '映像授業だけで理解できるか不安です。',
      answer: 'ご安心ください。\n週1回のライブ授業で実際に手を動かしながら理解を深めるハンズオン形式を採用しています。また、わからない点はチャットでいつでも質問可能です。'
    },
    {
      question: '働きながらでも受講できますか？',
      answer: 'はい、ほとんどの受講生が本業と両立しながら学んでいます。\n1日1時間〜を想定した学習設計と、週1のコーチングで無理のない進行を支援します。'
    },
    {
      question: '模擬案件ではどんなことをやるのですか？',
      answer: '実際の業務を想定した構成で、AWS上にインフラを構築していただきます。\nVPC設計、EC2構成、データベース設置、監視設定、セキュリティ設計まで一通りを経験し、構成図・設計意図・実装内容をまとめたポートフォリオを完成させます。'
    },
    {
      question: 'モニター価格で受講するには何か条件がありますか？',
      answer: '条件は以下の通りです：\n\n・受講中の学習記録（日報）提出\n・完走後のアンケート回答\n・成果事例としてのインタビュー協力（任意）\n\n※モニター枠は先着5名限定です。'
    },
    {
      question: '分割払いはできますか？',
      answer: 'はい、クレジットカード払いによる分割対応が可能です（回数はカード会社によります）。銀行振込も対応しています。'
    }
  ]

  return (
    <section id="faq" className="py-12 md:py-12" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* タイトル */}
        <div 
          ref={titleRef}
          className={`fade-in-up ${isTitleInView ? 'in-view' : ''} text-center mb-10`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            よくある質問
          </h2>
          <p className="text-orange-500 font-bold text-lg">FAQ</p>
        </div>
        
        {/* 質問リスト */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ