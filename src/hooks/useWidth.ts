import { useEffect, useState } from 'react'

export const useWidth = () => {
  const getWindowWidth = () => {
    if (typeof window === 'undefined') return 1920
    return window.innerWidth
  }

  const [width, setWidth] = useState<number>(getWindowWidth())

  const handleWindowSizeChange = () => {
    setWidth(getWindowWidth())
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width
}
