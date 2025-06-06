import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { TopType } from '../../types'

interface TopComponentProps {
  id: string
}

const TopBulb02 = ({ id }: TopComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Top" fill="#FFC107">
      <ellipse cx="50" cy="30" rx="25" ry="20" />
      <rect x="45" y="45" width="10" height="8" />
    </g>
  </g>
)

const TopAntenna = ({ id }: TopComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Top" stroke="#000000" strokeWidth="2">
      <line x1="50" y1="0" x2="50" y2="30" />
      <circle cx="50" cy="0" r="3" fill="#FF0000" />
    </g>
  </g>
)

const TopRadar = ({ id }: TopComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Top" fill="#424242">
      <rect x="40" y="20" width="20" height="10" rx="2" />
      <rect x="48" y="10" width="4" height="12" />
    </g>
  </g>
)

// Placeholder components for other top types
const TopAntennaCrooked = ({ id }: TopComponentProps) => <TopAntenna id={id} />
const TopBulb01 = ({ id }: TopComponentProps) => <TopBulb02 id={id} />
const TopGlowingBulb01 = ({ id }: TopComponentProps) => <TopBulb02 id={id} />
const TopGlowingBulb02 = ({ id }: TopComponentProps) => <TopBulb02 id={id} />
const TopHorns = ({ id }: TopComponentProps) => <TopAntenna id={id} />
const TopLights = ({ id }: TopComponentProps) => <TopBulb02 id={id} />
const TopPlankton = ({ id }: TopComponentProps) => <TopAntenna id={id} />
const TopPyramid = ({ id }: TopComponentProps) => <TopRadar id={id} />

const topComponents: Record<TopType, ComponentType<TopComponentProps>> = {
  Antenna: TopAntenna,
  AntennaCrooked: TopAntennaCrooked,
  Bulb01: TopBulb01,
  Bulb02: TopBulb02,
  GlowingBulb01: TopGlowingBulb01,
  GlowingBulb02: TopGlowingBulb02,
  Horns: TopHorns,
  Lights: TopLights,
  Plankton: TopPlankton,
  Pyramid: TopPyramid,
  Radar: TopRadar,
}

export function Top() {
  const { topType = 'Bulb02' } = useBotContext()
  const TopComponent = topComponents[topType]

  if (!TopComponent) {
    console.warn(`Unknown top type: ${topType}`)
    return null
  }

  return <TopComponent id={`Top/${topType}`} />
}
