import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let rx = 0, ry = 0
    let mx = 0, my = 0

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const raf = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(raf)
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        dot.style.width = '6px'
        dot.style.height = '6px'
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderColor = 'rgba(245,166,35,0.7)'
      } else {
        dot.style.width = '10px'
        dot.style.height = '10px'
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.borderColor = 'rgba(245,166,35,0.4)'
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
