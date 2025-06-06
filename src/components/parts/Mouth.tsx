import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { MouthType } from '../../types'

interface MouthComponentProps {
  id: string
}

const MouthSquare01 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Mouth" fill="#000000">
      <rect x="0" y="0" width="76" height="16" rx="8" />
    </g>
  </g>
)

const MouthSmile01 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Mouth" stroke="#000000" strokeWidth="3">
      <path d="M8,8 C8,13.5228475 17.9471525,18 38,18 C58.0528475,18 68,13.5228475 68,8" />
    </g>
  </g>
)

const MouthGrill01 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Mouth" fill="#000000">
      <rect x="8" y="4" width="60" height="2" />
      <rect x="8" y="8" width="60" height="2" />
      <rect x="8" y="12" width="60" height="2" />
      <rect x="8" y="16" width="60" height="2" />
    </g>
  </g>
)

// Placeholder components for other mouth types
const MouthArturito = ({ id }: MouthComponentProps) => <MouthSquare01 id={id} />
const MouthBite = ({ id }: MouthComponentProps) => <MouthSquare01 id={id} />
const MouthDiagram = ({ id }: MouthComponentProps) => <MouthSquare01 id={id} />
const MouthGrill02 = ({ id }: MouthComponentProps) => <MouthGrill01 id={id} />
const MouthGrill03 = ({ id }: MouthComponentProps) => <MouthGrill01 id={id} />
const MouthRoboCop = ({ id }: MouthComponentProps) => <MouthSquare01 id={id} />
const MouthSmile02 = ({ id }: MouthComponentProps) => <MouthSmile01 id={id} />
const MouthSquare02 = ({ id }: MouthComponentProps) => <MouthSquare01 id={id} />

const mouthComponents: Record<MouthType, ComponentType<MouthComponentProps>> = {
  Arturito: MouthArturito,
  Bite: MouthBite,
  Diagram: MouthDiagram,
  Grill01: MouthGrill01,
  Grill02: MouthGrill02,
  Grill03: MouthGrill03,
  RoboCop: MouthRoboCop,
  Smile01: MouthSmile01,
  Smile02: MouthSmile02,
  Square01: MouthSquare01,
  Square02: MouthSquare02,
}

export function Mouth() {
  const { mouthType = 'Square01' } = useBotContext()
  const MouthComponent = mouthComponents[mouthType]

  if (!MouthComponent) {
    console.warn(`Unknown mouth type: ${mouthType}`)
    return null
  }

  return <MouthComponent id={`Mouth/${mouthType}`} />
}
