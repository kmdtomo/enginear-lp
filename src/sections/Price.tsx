import React from 'react'

const Price: React.FC = () => {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#F5F6FC' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* タイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Enginearの料金プラン
          </h2>
          <p className="text-orange-500 font-bold text-lg">PRICE</p>
        </div>
        
        {/* TODO: 料金カードを追加 */}
      </div>
    </section>
  )
}

export default Price