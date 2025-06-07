import { forwardRef, useEffect } from 'react'
import clsx from 'clsx'
import { BotProvider } from '../../context/BotContext'
import { BotHead } from './BotHead'
import { CircleBackground } from './CircleBackground'
import type { BotProps } from '../../types'

// Mobile Safari SVG mask fix - prevents masks from rendering as rectangles on mobile
const mobileFixStyles = `
  @media (max-width: 768px) {
    .bottt-svg {
      transform: translateZ(0);
      will-change: transform;
      shape-rendering: geometricPrecision;
      text-rendering: geometricPrecision;
    }
    
    .bottt-svg mask,
    .bottt-svg clipPath,
    .bottt-svg defs {
      transform: translateZ(0);
      isolation: isolate;
    }
    
    .bottt-svg g[mask] rect,
    .bottt-svg [mask] rect {
      filter: none;
      transform: translateZ(0);
    }
    
    .bottt-svg use {
      transform: translateZ(0);
    }
    
    .bottt-svg mask use,
    .bottt-svg clipPath use {
      visibility: visible !important;
      display: block !important;
    }
    
    .bottt-svg g[mask] > rect:only-child {
      opacity: 0.01;
    }
  }
`

// Inject mobile fix styles once
let stylesInjected = false
const injectMobileFixStyles = () => {
  if (stylesInjected || typeof window === 'undefined') return

  const styleElement = window.document.createElement('style')
  styleElement.id = 'bottts-mobile-fix'
  styleElement.textContent = mobileFixStyles
  window.document.head.appendChild(styleElement)
  stylesInjected = true
}

export const Bot = forwardRef<SVGSVGElement, BotProps>(
  (
    {
      botStyle,
      circleColor,
      topType,
      topColor,
      faceType,
      faceColor,
      textureType,
      eyeType,
      mouthType,
      sideType,
      sidesColor,
      style,
      size = 240,
      className,
    },
    ref
  ) => {
    const botOptions = {
      botStyle,
      circleColor,
      topType,
      topColor,
      faceType,
      faceColor,
      textureType,
      eyeType,
      mouthType,
      sideType,
      sidesColor,
    }

    const isCircle = botStyle === 'Circle'
    const mainId = 'Bottt'
    const maskId = `${mainId}-mask`

    // Inject mobile Safari fix styles on first render
    useEffect(() => {
      injectMobileFixStyles()
    }, [])

    return (
      <BotProvider initialOptions={botOptions}>
        <svg
          ref={ref}
          style={style}
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 240 240"
          className={clsx('bottt-svg', className)}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
          aria-label="Bot avatar"
        >
          <title>Bot Avatar</title>
          <desc>Generated bot avatar using Bottts library</desc>
          <defs>
            {isCircle && (
              <>
                <circle id={`${mainId}-circle`} cx="120" cy="120" r="120" />
                <mask id={maskId} fill="white">
                  <use xlinkHref={`#${mainId}-circle`} />
                </mask>
              </>
            )}
          </defs>
          <g
            id={mainId}
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            {isCircle && <CircleBackground />}
            <g
              id="Bottt-Content"
              mask={isCircle ? `url(#${maskId})` : undefined}
            >
              <BotHead />
            </g>
          </g>
        </svg>
      </BotProvider>
    )
  }
)

Bot.displayName = 'Bot'
