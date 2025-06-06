import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { FaceType } from '../../types'

interface FaceComponentProps {
  id: string
}

const FaceSquare01 = ({ id }: FaceComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Face" fill="#607D8B">
      <rect x="0" y="0" width="130" height="120" rx="8" />
    </g>
  </g>
)

const FaceRound01 = ({ id }: FaceComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Face" fill="#607D8B">
      <rect x="0" y="0" width="130" height="120" rx="65" />
    </g>
  </g>
)

// Placeholder components for other face types
const FaceArturito = ({ id }: FaceComponentProps) => <FaceSquare01 id={id} />
const FaceRoboCop = ({ id }: FaceComponentProps) => <FaceSquare01 id={id} />
const FaceRound02 = ({ id }: FaceComponentProps) => <FaceRound01 id={id} />
const FaceSquare02 = ({ id }: FaceComponentProps) => <FaceSquare01 id={id} />
const FaceSquare03 = ({ id }: FaceComponentProps) => <FaceSquare01 id={id} />
const FaceSquare04 = ({ id }: FaceComponentProps) => <FaceSquare01 id={id} />

const faceComponents: Record<FaceType, ComponentType<FaceComponentProps>> = {
  Arturito: FaceArturito,
  RoboCop: FaceRoboCop,
  Round01: FaceRound01,
  Round02: FaceRound02,
  Square01: FaceSquare01,
  Square02: FaceSquare02,
  Square03: FaceSquare03,
  Square04: FaceSquare04,
}

export function Face() {
  const { faceType = 'Square01' } = useBotContext()
  const FaceComponent = faceComponents[faceType]

  if (!FaceComponent) {
    console.warn(`Unknown face type: ${faceType}`)
    return null
  }

  return <FaceComponent id={`Face/${faceType}`} />
}
