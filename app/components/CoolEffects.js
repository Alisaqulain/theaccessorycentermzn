'use client'
import { useEffect, useRef } from 'react'

export default function CoolEffects() {
  const animationFrameRef = useRef()
  const lastMouseMoveRef = useRef(0)
  const trailCountRef = useRef(0)

  useEffect(() => {
    // Optimized parallax scrolling effect with requestAnimationFrame
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll('[data-parallax]')
        
        parallaxElements.forEach(element => {
          const speed = element.dataset.parallax || 0.5
          const yPos = -(scrolled * speed)
          element.style.transform = `translateY(${yPos}px)`
        })
      })
    }

    // Optimized mouse cursor trail effect with throttling
    const createCursorTrail = (e) => {
      const now = Date.now()
      if (now - lastMouseMoveRef.current < 16) return // Throttle to 60fps
      lastMouseMoveRef.current = now
      
      // Limit trail count to prevent performance issues
      if (trailCountRef.current > 10) return
      trailCountRef.current++
      
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: #dc2626;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: fadeOut 0.3s ease-out forwards;
      `
      
      document.body.appendChild(trail)
      
      setTimeout(() => {
        trail.remove()
        trailCountRef.current--
      }, 300)
    }

    // Add CSS for cursor trail animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeOut {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0);
        }
      }
      
      .cursor-trail {
        box-shadow: 0 0 10px #dc2626;
      }
    `
    document.head.appendChild(style)

    // Optimized matrix rain effect
    const createMatrixRain = () => {
      const canvas = document.createElement('canvas')
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.05;
      `
      document.body.appendChild(canvas)
      
      const ctx = canvas.getContext('2d')
      canvas.width = Math.min(window.innerWidth, 800) // Limit width for performance
      canvas.height = Math.min(window.innerHeight, 600) // Limit height for performance
      
      const chars = '01'
      const charArray = chars.split('')
      const fontSize = 12
      const columns = Math.floor(canvas.width / fontSize)
      const drops = []
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1
      }
      
      let lastTime = 0
      const draw = (currentTime) => {
        if (currentTime - lastTime < 100) { // Throttle to 10fps
          requestAnimationFrame(draw)
          return
        }
        lastTime = currentTime
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = '#dc2626'
        ctx.font = fontSize + 'px monospace'
        
        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0
          }
          drops[i]++
        }
        
        requestAnimationFrame(draw)
      }
      
      requestAnimationFrame(draw)
      
      return () => {
        canvas.remove()
      }
    }

    // Optimized floating particles effect
    const createFloatingParticles = () => {
      const particlesContainer = document.createElement('div')
      particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
      `
      document.body.appendChild(particlesContainer)
      
      let particleCount = 0
      const maxParticles = 15 // Limit particle count
      
      const createParticle = () => {
        if (particleCount >= maxParticles) return
        
        particleCount++
        const particle = document.createElement('div')
        particle.style.cssText = `
          position: absolute;
          width: 1px;
          height: 1px;
          background: #dc2626;
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: 100%;
          animation: floatUp ${4 + Math.random() * 2}s linear forwards;
          opacity: ${0.2 + Math.random() * 0.3};
        `
        
        particlesContainer.appendChild(particle)
        
        setTimeout(() => {
          particle.remove()
          particleCount--
        }, 6000)
      }
      
      const interval = setInterval(createParticle, 500) // Reduced frequency
      
      return () => {
        clearInterval(interval)
        particlesContainer.remove()
      }
    }

    // Add CSS for floating particles
    const particleStyle = document.createElement('style')
    particleStyle.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(particleStyle)

    // Event listeners
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', createCursorTrail)
    
    // Start effects
    const cleanupMatrix = createMatrixRain()
    const cleanupParticles = createFloatingParticles()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', createCursorTrail)
      cleanupMatrix()
      cleanupParticles()
      style.remove()
      particleStyle.remove()
    }
  }, [])

  return null
}
