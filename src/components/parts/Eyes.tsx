import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { EyeType } from '../../types'

interface EyeComponentProps {
  id: string
}

const EyeRound = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Eye" transform="translate(18.000000, 24.000000)" fill="#FFFFFF">
      <circle cx="6" cy="6" r="6" />
      <circle cx="62" cy="6" r="6" />
    </g>
  </g>
)

const EyeShades = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Shades" transform="translate(14.000000, 20.000000)" fill="#000000">
      <rect x="0" y="0" width="76" height="16" rx="8" />
    </g>
  </g>
)

const EyeHappy = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g
      id="Happy"
      transform="translate(18.000000, 24.000000)"
      stroke="#000000"
      strokeWidth="2"
    >
      <path d="M0,6 C0,2.6862915 2.6862915,0 6,0 C9.3137085,0 12,2.6862915 12,6" />
      <path d="M56,6 C56,2.6862915 58.6862915,0 62,0 C65.3137085,0 68,2.6862915 68,6" />
    </g>
  </g>
)

// Placeholder components for other eye types
const EyeArturito = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeBulging = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeDizzy = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeEva = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeFrame01 = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeFrame02 = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeGlow = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeHal = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeHearts = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeRoboCop = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeRoundFrame01 = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeRoundFrame02 = ({ id }: EyeComponentProps) => <EyeRound id={id} />
const EyeSensor = ({ id }: EyeComponentProps) => <EyeRound id={id} />

const eyeComponents: Record<EyeType, ComponentType<EyeComponentProps>> = {
  Arturito: EyeArturito,
  Bulging: EyeBulging,
  Dizzy: EyeDizzy,
  Eva: EyeEva,
  Frame01: EyeFrame01,
  Frame02: EyeFrame02,
  Glow: EyeGlow,
  Hal: EyeHal,
  Happy: EyeHappy,
  Hearts: EyeHearts,
  RoboCop: EyeRoboCop,
  Round: EyeRound,
  RoundFrame01: EyeRoundFrame01,
  RoundFrame02: EyeRoundFrame02,
  Sensor: EyeSensor,
  Shades: EyeShades,
}

export function Eyes() {
  const { eyeType = 'Round' } = useBotContext()
  const EyeComponent = eyeComponents[eyeType]

  if (!EyeComponent) {
    console.warn(`Unknown eye type: ${eyeType}`)
    return null
  }

  return <EyeComponent id={`Eyes/${eyeType}`} />
}
