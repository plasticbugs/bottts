import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { SideType } from '../../types'

interface SidesComponentProps {
  id: string
}

const SidesSquare = ({ id }: SidesComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Sides" fill="#607D8B">
      <rect x="0" y="0" width="20" height="76" rx="4" />
      <rect x="160" y="0" width="20" height="76" rx="4" />
    </g>
  </g>
)

const SidesRound = ({ id }: SidesComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Sides" fill="#607D8B">
      <ellipse cx="10" cy="38" rx="10" ry="38" />
      <ellipse cx="170" cy="38" rx="10" ry="38" />
    </g>
  </g>
)

const SidesAntenna01 = ({ id }: SidesComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Sides" stroke="#000000" strokeWidth="2">
      <line x1="10" y1="10" x2="30" y2="0" />
      <line x1="170" y1="10" x2="150" y2="0" />
      <circle cx="30" cy="0" r="2" fill="#FF0000" />
      <circle cx="150" cy="0" r="2" fill="#FF0000" />
    </g>
  </g>
)

// Placeholder components for other side types
const SidesAntenna02 = ({ id }: SidesComponentProps) => (
  <SidesAntenna01 id={id} />
)
const SidesCables01 = ({ id }: SidesComponentProps) => <SidesSquare id={id} />
const SidesCables02 = ({ id }: SidesComponentProps) => <SidesSquare id={id} />
const SidesSquareAsymmetric = ({ id }: SidesComponentProps) => (
  <SidesSquare id={id} />
)

const sidesComponents: Record<SideType, ComponentType<SidesComponentProps>> = {
  Antenna01: SidesAntenna01,
  Antenna02: SidesAntenna02,
  Cables01: SidesCables01,
  Cables02: SidesCables02,
  Round: SidesRound,
  Square: SidesSquare,
  SquareAsymmetric: SidesSquareAsymmetric,
}

export function Sides() {
  const { sideType = 'Square' } = useBotContext()
  const SidesComponent = sidesComponents[sideType]

  if (!SidesComponent) {
    console.warn(`Unknown sides type: ${sideType}`)
    return null
  }

  return <SidesComponent id={`Sides/${sideType}`} />
}
