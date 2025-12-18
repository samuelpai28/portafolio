'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Verificar que estamos en el navegador
    if (typeof window === 'undefined') return

    // Configuración - Ajustar para móviles
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? 50 : 80 // Menos partículas en móviles para mejor rendimiento
    const connectionDistance = 150
    const mouseConnectionDistance = 200
    const particleSpeed = 0.3

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      if (typeof window === 'undefined') return
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      // Recrear partículas si el tamaño cambió significativamente
      if (particlesRef.current.length > 0) {
        const newParticleCount = window.innerWidth < 768 ? 50 : 80
        if (particlesRef.current.length !== newParticleCount) {
          createParticles()
        }
      }
    }
    resizeCanvas()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeCanvas)
      window.addEventListener('orientationchange', resizeCanvas)
    }

    // Crear partículas
    const createParticles = () => {
      const currentParticleCount = window.innerWidth < 768 ? 50 : 80
      particlesRef.current = []
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      for (let i = 0; i < currentParticleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
          radius: Math.random() * 1.5 + 0.5,
        })
      }
    }
    createParticles()

    // Actualizar posición de partículas
    const updateParticles = () => {
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))
      })
    }

    // Calcular distancia entre dos puntos
    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    // Dibujar línea con gradiente
    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      opacity: number
    ) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`)
      gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity})`)
      gradient.addColorStop(1, `rgba(99, 102, 241, ${opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Dibujar partícula
    const drawParticle = (particle: Particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius * 3
      )
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)')
      gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.4)')
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
      ctx.fill()

      // Punto central
      ctx.fillStyle = 'rgba(139, 92, 246, 0.9)'
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      updateParticles()

      // Dibujar conexiones entre partículas
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dist = distance(p1.x, p1.y, p2.x, p2.y)

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance
            drawLine(p1.x, p1.y, p2.x, p2.y, opacity * 0.3)
          }
        }
      }

      // Dibujar conexiones con el cursor
      if (isHovered) {
        particlesRef.current.forEach((particle) => {
          const dist = distance(
            particle.x,
            particle.y,
            mouseRef.current.x,
            mouseRef.current.y
          )

          if (dist < mouseConnectionDistance) {
            const opacity = 1 - dist / mouseConnectionDistance
            drawLine(
              particle.x,
              particle.y,
              mouseRef.current.x,
              mouseRef.current.y,
              opacity * 0.5
            )
          }
        })

        // Dibujar punto en el cursor
        const cursorGradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          15
        )
        cursorGradient.addColorStop(0, 'rgba(139, 92, 246, 0.6)')
        cursorGradient.addColorStop(1, 'rgba(139, 92, 246, 0)')

        ctx.fillStyle = cursorGradient
        ctx.beginPath()
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 15, 0, Math.PI * 2)
        ctx.fill()
      }

      // Dibujar partículas
      particlesRef.current.forEach(drawParticle)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Event listeners para el mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Event listeners para touch (móviles)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX
        mouseRef.current.y = e.touches[0].clientY
        setIsHovered(true)
      }
    }

    const handleTouchEnd = () => {
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    // Solo agregar event listeners si estamos en el navegador
    if (typeof window !== 'undefined') {
      // Usar el contenedor del canvas para los eventos
      const container = canvas.parentElement
      if (container) {
        container.style.pointerEvents = 'auto'
        container.style.touchAction = 'none' // Permite eventos táctiles
        // Eventos de mouse
        container.addEventListener('mousemove', handleMouseMove)
        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)
        // Eventos táctiles para móviles
        container.addEventListener('touchmove', handleTouchMove, { passive: true })
        container.addEventListener('touchend', handleTouchEnd, { passive: true })
        container.addEventListener('touchcancel', handleTouchEnd, { passive: true })
      }
      // También agregar al canvas como respaldo
      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('mouseenter', handleMouseEnter)
      canvas.addEventListener('mouseleave', handleMouseLeave)
      // Eventos táctiles en el canvas
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
      canvas.addEventListener('touchend', handleTouchEnd, { passive: true })
      canvas.addEventListener('touchcancel', handleTouchEnd, { passive: true })
    }

    // Iniciar animación solo si estamos en el navegador
    if (typeof window !== 'undefined') {
      animate()
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas)
        window.removeEventListener('orientationchange', resizeCanvas)
        if (animationFrameRef.current !== undefined) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
      if (canvas) {
        const container = canvas.parentElement
        if (container) {
          // Remover eventos de mouse
          container.removeEventListener('mousemove', handleMouseMove)
          container.removeEventListener('mouseenter', handleMouseEnter)
          container.removeEventListener('mouseleave', handleMouseLeave)
          // Remover eventos táctiles
          container.removeEventListener('touchmove', handleTouchMove)
          container.removeEventListener('touchend', handleTouchEnd)
          container.removeEventListener('touchcancel', handleTouchEnd)
        }
        // Remover eventos del canvas
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('mouseenter', handleMouseEnter)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
        canvas.removeEventListener('touchmove', handleTouchMove)
        canvas.removeEventListener('touchend', handleTouchEnd)
        canvas.removeEventListener('touchcancel', handleTouchEnd)
      }
    }
  }, [isHovered, isMounted])

  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }}
    >
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />
      )}
    </div>
  )
}

