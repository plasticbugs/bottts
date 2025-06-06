import { forwardRef } from 'react'
import clsx from 'clsx'
import { BotProvider } from '../../context/BotContext'
import { Face } from '../parts/Face'
import { Eyes } from '../parts/Eyes'
import { Mouth } from '../parts/Mouth'
import { Sides } from '../parts/Sides'
import { Top } from '../parts/Top'
import type { PieceProps } from '../../types'

const pieceComponents = {
  top: Top,
  face: Face,
  eye: Eyes,
  mouth: Mouth,
  sides: Sides,
} as const

export const Piece = forwardRef<SVGSVGElement, PieceProps>(
  (
    {
      pieceType,
      pieceSize = 100,
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

    const PieceComponent = pieceComponents[pieceType]
    const size =
      typeof pieceSize === 'string' ? parseInt(pieceSize, 10) : pieceSize

    if (!PieceComponent) {
      console.warn(`Unknown piece type: ${pieceType}`)
      return null
    }

    return (
      <BotProvider initialOptions={botOptions}>
        <svg
          ref={ref}
          style={style}
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 100 100"
          className={clsx(
            'bottt-piece',
            `bottt-piece--${pieceType}`,
            className
          )}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
          aria-label={`Bot ${pieceType} piece`}
        >
          <title>Bot {pieceType} piece</title>
          <desc>Individual bot piece: {pieceType}</desc>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <PieceComponent />
          </g>
        </svg>
      </BotProvider>
    )
  }
)

Piece.displayName = 'Piece'
