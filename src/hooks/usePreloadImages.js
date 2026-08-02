// src/hooks/usePreloadImages.js
import { useEffect } from 'react'

export function usePreloadImages(srcList) {
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 200))

    const cancel = idle(() => {
      srcList.forEach((src) => {
        const img = new Image()
        img.src = src // triggers the browser to fetch + cache it
      })
    })

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(cancel)
    }
  }, [srcList])
}