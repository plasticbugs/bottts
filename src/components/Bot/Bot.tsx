import { forwardRef } from 'react'
import clsx from 'clsx'
import { BotProvider } from '../../context/BotContext'
import { BotHead } from './BotHead'
import { CircleBackground } from './CircleBackground'
import type { BotProps } from '../../types'

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
