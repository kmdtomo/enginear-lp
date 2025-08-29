import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((targetId: string) => {
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    scrollToElement(targetId)
  }, [scrollToElement])

  return { handleSmoothScroll, scrollToElement }
}