import { useBotContext } from '../../context/BotContext'
import { CircleColor } from '../parts/CircleColor'

export function CircleBackground() {
  const { circleColor } = useBotContext()
  const mainId = 'Circle'
  const pathId = `${mainId}-path`
  const maskId = `${mainId}-mask`

  return (
    <g id={mainId}>
      <defs>
        <circle id={pathId} cx="120" cy="120" r="120" />
      </defs>
      <g id="Circle" strokeWidth="1" fillRule="evenodd">
        <mask id={maskId} fill="white">
          <use xlinkHref={`#${pathId}`} />
        </mask>
        <use id="Circle-Background" fill="#E6E6E6" xlinkHref={`#${pathId}`} />
        <CircleColor maskID={maskId} color={circleColor}>
          <rect id="Color" x="0" y="0" width="240" height="240" />
        </CircleColor>
      </g>
    </g>
  )
}
