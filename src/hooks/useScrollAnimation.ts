import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-100px',
    once = true
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // 1) 直ちに可視域チェック（初期状態で隠れっぱなしを防ぐ）
    const revealIfInViewport = () => {
      const rect = element.getBoundingClientRect()
      const viewportH = window.innerHeight || document.documentElement.clientHeight
      if (rect.top <= viewportH - 40) {
        setIsInView(true)
      }
    }

    revealIfInViewport()

    // 2) IntersectionObserver 非対応ブラウザ対策
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && observer) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    // 3) リサイズ時・ロード時にも再判定
    const onResize = () => revealIfInViewport()
    window.addEventListener('load', revealIfInViewport)
    window.addEventListener('resize', onResize)

    // 4) フォールバック：1.5秒後に強制表示（念のため）
    const fallback = window.setTimeout(() => setIsInView(true), 1500)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', revealIfInViewport)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(fallback)
    }
  }, [threshold, rootMargin, once])

  return { ref, isInView }
}