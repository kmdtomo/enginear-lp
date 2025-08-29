import React, { useState, useEffect, useRef } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const FixedCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [hasIntroShown, setHasIntroShown] = useState(false)
  const { handleSmoothScroll } = useSmoothScroll()
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHasIntroShown(true), 900)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const footerSection = document.getElementById('footer')
    if (!footerSection) return

    let observer: IntersectionObserver | null = null

    const setupObserver = () => {
      if (observer) {
        observer.disconnect()
        observer = null
      }

      const ctaHeight = ctaRef.current?.offsetHeight ?? 100
      const offset = 32 // 遅らせるマージン

      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          setIsVisible(!entry.isIntersecting)
        },
        {
          root: null,
          threshold: 0,
          rootMargin: `0px 0px -${ctaHeight + offset}px 0px`
        }
      )

      observer.observe(footerSection)

      // 初期判定（フッターが下端-CTA高さ-余白に到達したら非表示）
      const footerRect = footerSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const hasReached = footerRect.top <= (viewportHeight - (ctaHeight + offset))
      setIsVisible(!hasReached)
    }

    setupObserver()
    const onResize = () => setupObserver()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <div 
      ref={ctaRef}
      className="fixed bottom-0 md:left-20 md:right-20 left-4 right-4 z-50 text-white md:py-5 py-5 rounded-t-lg transition-all duration-300"
      style={{ 
        background: 'linear-gradient(135deg, rgba(5,117,230,0.9) 0%, rgba(2,27,121,0.9) 100%)',
        transform: isVisible && hasIntroShown ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible && hasIntroShown ? 1 : 0,
        pointerEvents: isVisible && hasIntroShown ? 'auto' : 'none',
        transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-in-out 120ms',
        willChange: 'transform, opacity'
      }}
    >
      <div className="max-w-7xl mx-auto md:px-4 px-3 flex md:flex-row flex-col md:items-center items-center justify-center md:gap-8 gap-4 text-center">
        <div className="flex flex-col md:items-center items-center gap-1">
          <p className="text-yellow md:text-xl text-sm font-medium" style={{ letterSpacing: '0.08em' }}>今だけ先着5名限定！</p>
          <p className="md:text-3xl text-xl font-bold" style={{ letterSpacing: '0.08em' }}>70%OFFでモニター募集中！</p>
        </div>
        <a 
          href="#contact" 
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          className="inline-flex md:w-auto w-full md:justify-center justify-center items-center gap-3 bg-[#00C300] text-white rounded-full md:px-8 px-5 md:py-3 py-2 shadow md:text-lg text-base transform transition-all duration-150 hover:scale-95 active:scale-90"
        >
          <img src="/icons8-line (1).svg" alt="LINE" className="md:w-7 md:h-7 w-6 h-6" />
          <span className="inline-flex items-baseline gap-0 md:tracking-widest tracking-wide">
            <span className="md:text-xl text-lg font-bold">今すぐ無料相談</span>
            <span className="font-medium md:text-sm text-xs">を予約する</span>
          </span>
          <span className="md:text-base text-sm">▶</span>
        </a>
      </div>
    </div>
  )
}

export default FixedCTA