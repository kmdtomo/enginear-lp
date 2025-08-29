import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type FAQItemProps = {
  question: string
  answer: string
  delay?: number
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div 
      ref={ref}
      className={`stagger-item ${isInView ? 'in-view' : ''} rounded-lg p-6 cursor-pointer`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-bold text-xl" style={{ color: '#2911E2' }}>Q</span>
          <p className="text-base font-medium text-black">{question}</p>
        </div>
        <svg 
          className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#2911E2' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && answer && (
        <div className="mt-4 ml-10">
          <p className="text-base text-black whitespace-pre-line leading-relaxed md:pr-20">
            <span className="font-medium">A：</span>{answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default FAQItem