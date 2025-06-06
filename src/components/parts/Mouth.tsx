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

const MouthArturito = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Color-Bar"
      fillOpacity="0.8"
      fill="#0040AE"
      x="0"
      y="0"
      width="8"
      height="27"
    />
    <g
      id="Processor-Status-Indicator"
      transform="translate(12.000000, 0.000000)"
    >
      <rect
        id="Processor-container"
        fillOpacity="0.8"
        fill="#0040AE"
        x="0"
        y="0"
        width="36"
        height="27"
      />
      <circle
        id="Light"
        fillOpacity="0.6"
        fill="#FFFFFF"
        cx="18"
        cy="14"
        r="8"
      />
    </g>
    <g
      id="Holographic-Projector"
      transform="translate(52.000000, 2.000000)"
      fill="#000000"
      fillOpacity="0.4"
    >
      <circle id="R2" cx="12" cy="12" r="12" />
      <circle id="R2" cx="12" cy="12" r="8.16" />
    </g>
  </g>
)

const MouthBite = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fillOpacity="0.2"
      fill="#000000"
      x="4"
      y="5"
      width="68"
      height="22"
      rx="5"
    />
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fillOpacity="0.6"
      fill="#000000"
      x="8"
      y="9"
      width="60"
      height="14"
      rx="2"
    />
    <polygon
      id="Triangle-2"
      fill="#E1E6E8"
      transform="translate(20.000000, 13.000000) scale(1, -1) translate(-20.000000, -13.000000)"
      points="20 9 26 17 14 17"
    />
    <polygon
      id="Triangle-2"
      fill="#E1E6E8"
      transform="translate(32.000000, 13.000000) scale(1, -1) translate(-32.000000, -13.000000)"
      points="32 9 38 17 26 17"
    />
    <polygon
      id="Triangle-2"
      fill="#E1E6E8"
      transform="translate(44.000000, 13.000000) scale(1, -1) translate(-44.000000, -13.000000)"
      points="44 9 50 17 38 17"
    />
    <polygon
      id="Triangle-2"
      fill="#E1E6E8"
      transform="translate(56.000000, 13.000000) scale(1, -1) translate(-56.000000, -13.000000)"
      points="56 9 62 17 50 17"
    />
  </g>
)

const MouthDiagram = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fillOpacity="0.2"
      fill="#000000"
      x="4"
      y="4"
      width="68"
      height="24"
      rx="5"
    />
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fillOpacity="0.8"
      fill="#000000"
      x="8"
      y="8"
      width="60"
      height="16"
      rx="2"
    />
    <polyline
      id="Path-3"
      stroke="#4EFAC9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="9 17 20 17 22 13 25 20 29 12 31 21 34 10 37 20 40 17 55 17 58 13 60 20 63 17 67 17"
    />
  </g>
)

const MouthGrill02 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Grill" transform="translate(14.000000, 10.000000)" fill="#000000">
      <rect id="Grill-Grin" x="14" y="0" width="6" height="14" rx="2" />
      <rect id="Grill-Grin" x="0" y="0" width="6" height="14" rx="2" />
      <rect id="Grill-Grin" x="28" y="0" width="6" height="14" rx="2" />
      <rect id="Grill-Grin" x="42" y="0" width="6" height="14" rx="2" />
    </g>
  </g>
)

const MouthGrill03 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fillOpacity="0.2"
      fill="#000000"
      x="4"
      y="5"
      width="68"
      height="22"
      rx="5"
    />
    <rect
      id="Kiss-The-Robot-Beep-Boop"
      fill="#FFFFFF"
      x="8"
      y="9"
      width="60"
      height="14"
      rx="2"
    />
    <rect
      id="Bender-Teeth"
      fillOpacity="0.1"
      fill="#000000"
      x="18"
      y="9"
      width="4"
      height="14"
    />
    <rect
      id="Bender-Teeth"
      fillOpacity="0.1"
      fill="#000000"
      x="42"
      y="9"
      width="4"
      height="14"
    />
    <rect
      id="Bender-Teeth"
      fillOpacity="0.1"
      fill="#000000"
      x="30"
      y="9"
      width="4"
      height="14"
    />
    <rect
      id="Bender-Teeth"
      fillOpacity="0.1"
      fill="#000000"
      x="54"
      y="9"
      width="4"
      height="14"
    />
  </g>
)

const MouthRoboCop = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <path
      d="M38.000205,0 L76.000205,0 L76,21 C74.6982291,28.3333333 70.417878,32 63.1589466,32 C52.2706162,32 49.1374429,24.0000982 38.000205,24 C26.8628005,24 23.7296555,32 12.8412584,32 C5.58232699,32 1.30197584,28.3333333 0.000204963239,21 L-3.97903932e-13,0 L38.000205,0 Z"
      id="Drop-It!"
      fill="#F6E3D0"
    />
    <path
      d="M30,8 C30,12.418278 33.581722,16 38,16 C42.418278,16 46,12.418278 46,8"
      id="Thank-You-For-Your-Cooperation"
      stroke="#A75548"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </g>
)

const MouthSmile02 = ({ id }: MouthComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M18,10.2222222 C18,21.7845222 24.4740576,28 38,28 C51.5182433,28 58,21.6614595 58,10.2222222 C58,9.49621891 57.1738581,8 55,8 C39.2707408,8 29.1916598,8 21,8 C18.9490269,8 18,9.38479408 18,10.2222222 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use
        id="Mouth"
        fillOpacity="0.8"
        fill="#000000"
        xlinkHref={`#${pathName}`}
      />
      <rect
        id="Teeth"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        x="30"
        y="2"
        width="16"
        height="14"
        rx="2"
      />
    </g>
  )
}

const MouthSquare02 = ({ id }: MouthComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect id="😐" fill="#000000" x="16" y="8" width="44" height="4" rx="2" />
  </g>
)

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
