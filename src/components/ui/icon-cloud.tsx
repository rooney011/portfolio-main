"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

interface IconCloudProps {
  icons?: React.ReactNode[]
  images?: string[]
  onIconClick?: (index: number) => void
}

// 3 orbital ring tilts in degrees (like an atom model - tilted ellipses)
const ORBITS = [
  { tiltDeg: 0 },
  { tiltDeg: 60 },
  { tiltDeg: -60 },
]

const SPEED_DEG_PER_MS = 0.02  // slow, comfortable rotation

function buildItems(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const orbitIndex = i % ORBITS.length
    const itemsInOrbit = Math.ceil(count / ORBITS.length)
    const posInOrbit = Math.floor(i / ORBITS.length)
    const startAngle = (posInOrbit / itemsInOrbit) * 360
    return { orbitIndex, startAngle, index: i }
  })
}

export function IconCloud({ icons, images, onIconClick }: IconCloudProps) {
  const angleRef = useRef(0)
  const animRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)
  const [tick, setTick] = useState(0)

  const sourceItems = icons || images || []
  const count = sourceItems.length
  const items = buildItems(count)

  // Smooth animation loop
  useEffect(() => {
    const loop = (now: number) => {
      if (lastTimeRef.current !== null) {
        const dt = now - lastTimeRef.current
        angleRef.current = (angleRef.current + dt * SPEED_DEG_PER_MS) % 360
        setTick((n) => n + 1)
      }
      lastTimeRef.current = now
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(animRef.current)
      lastTimeRef.current = null
    }
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent, index: number) => {
      e.stopPropagation()
      onIconClick?.(index)
    },
    [onIconClick]
  )

  const globalAngle = angleRef.current
  const SIZE = 320
  const CX = SIZE / 2
  const CY = SIZE / 2
  const RX = 130
  const RY = 44
  const ICON_SIZE = 38

  // Compute icon positions
  const computed = items.map(({ orbitIndex, startAngle, index }) => {
    const tilt = ORBITS[orbitIndex].tiltDeg
    const angle = (startAngle + globalAngle) % 360
    const rad = (angle * Math.PI) / 180
    const tiltRad = (tilt * Math.PI) / 180

    // Position on ellipse, then rotated in 2D by tilt
    const ox = Math.cos(rad) * RX
    const oy = Math.sin(rad) * RY

    const finalX = CX + ox * Math.cos(tiltRad) - oy * Math.sin(tiltRad)
    const finalY = CY + ox * Math.sin(tiltRad) + oy * Math.cos(tiltRad)

    // Use sin(rad) as depth indicator: +1 = front, -1 = back
    const depth = Math.sin(rad)
    const scale = 0.55 + 0.45 * ((depth + 1) / 2)
    const opacity = 0.3 + 0.7 * ((depth + 1) / 2)
    const zIndex = Math.round(depth * 100) + 200

    return { index, finalX, finalY, scale, opacity, zIndex }
  })

  // Sort back-to-front so front icons render on top
  const sorted = [...computed].sort((a, b) => a.zIndex - b.zIndex)

  return (
    <div
      style={{
        position: "relative",
        width: SIZE,
        height: SIZE,
        maxWidth: "88vw",
        maxHeight: "88vw",
        margin: "0 auto",
        flexShrink: 0,
      }}
    >
      {/* SVG layer: orbital ring ellipses + nucleus */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="orbit-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="nucleus-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Three orbital ellipses */}
        {ORBITS.map((orbit, oi) => (
          <ellipse
            key={oi}
            cx={CX}
            cy={CY}
            rx={RX}
            ry={RY}
            fill="none"
            stroke={oi === 0 ? "#a78bfa" : oi === 1 ? "#fb923c" : "#38bdf8"}
            strokeWidth="1.2"
            strokeOpacity="0.4"
            filter="url(#orbit-glow)"
            transform={`rotate(${orbit.tiltDeg}, ${CX}, ${CY})`}
          />
        ))}

        {/* Nucleus glow in center */}
        <circle cx={CX} cy={CY} r={16} fill="url(#nucleus-grad)" />
        <circle cx={CX} cy={CY} r={6} fill="#e9d5ff" opacity={0.9} />
      </svg>

      {/* Icon bubbles (DOM elements for native touch) */}
      {sorted.map(({ index, finalX, finalY, scale, opacity, zIndex }) => {
        const size = ICON_SIZE * scale
        const src = images ? (sourceItems[index] as string) : null

        return (
          <div
            key={index}
            onClick={(e) => handleClick(e, index)}
            onTouchEnd={(e) => handleClick(e, index)}
            style={{
              position: "absolute",
              left: finalX,
              top: finalY,
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              opacity,
              zIndex,
              cursor: "pointer",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.2), rgba(140,80,255,0.07))",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: `0 2px ${Math.round(8 * scale)}px rgba(160,90,255,${(0.4 * opacity).toFixed(2)})`,
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              userSelect: "none",
            } as React.CSSProperties}
            role="button"
            tabIndex={0}
            aria-label={`Skill icon ${index + 1}`}
          >
            {src && (
              <img
                src={src}
                alt={`icon-${index}`}
                width={Math.round(size * 0.6)}
                height={Math.round(size * 0.6)}
                style={{ objectFit: "contain", pointerEvents: "none", borderRadius: "50%" }}
                draggable={false}
                onError={(e) => {
                  const el = e.currentTarget.parentElement
                  if (el) {
                    // Show a faint dot instead of broken image
                    e.currentTarget.style.display = "none"
                    el.style.background = "rgba(120,60,220,0.15)"
                  }
                }}
              />
            )}
            {icons && (
              <span style={{ display: "flex", pointerEvents: "none", width: "62%", height: "62%", alignItems: "center", justifyContent: "center" }}>
                {sourceItems[index] as React.ReactNode}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
