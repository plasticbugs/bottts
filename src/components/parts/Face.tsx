import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { FaceType } from '../../types'
import { Texture } from './Texture'
import { FaceColor } from './FaceColor'

interface FaceComponentProps {
  id: string
}

const FaceSquare01 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <defs>
        <rect id={pathName} x="0" y="0" width="130" height="120" rx="8" />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Face" fill="#607D8B" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const FaceRound01 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <defs>
        <rect id={pathName} x="0" y="0" width="130" height="120" rx="65" />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Face" fill="#607D8B" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const FaceArturito = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <defs>
        <path
          d="M60,0 L70,0 C103.137085,-6.08718376e-15 130,26.862915 130,60 L130,116 C130,118.209139 128.209139,120 126,120 L4,120 C1.790861,120 2.705415e-16,118.209139 0,116 L0,60 C-4.05812251e-15,26.862915 26.862915,6.08718376e-15 60,0 Z"
          id={pathName}
        />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="R2" fill="#E1E6E8" xlinkHref={`#${pathName}`} />
      <polygon
        id="Color-Bar"
        fillOpacity="0.8"
        fill="#0040AE"
        mask={`url(#${maskName})`}
        points="0 80 10 80 10 107 0 107"
      />
      <polygon
        id="Color-Bar"
        fillOpacity="0.8"
        fill="#0040AE"
        mask={`url(#${maskName})`}
        points="0 111 130 111 130 116 0 116"
      />
      <rect
        id="Color-Bar"
        fillOpacity="0.8"
        fill="#0040AE"
        mask={`url(#${maskName})`}
        x="121"
        y="80"
        width="9"
        height="27"
      />
      <rect
        id="Color-Bar"
        fillOpacity="0.8"
        fill="#0040AE"
        mask={`url(#${maskName})`}
        x="7.3"
        y="8"
        width="54.9"
        height="16.1834862"
      />
      <rect
        id="Color-Bar"
        fillOpacity="0.8"
        fill="#0040AE"
        mask={`url(#${maskName})`}
        x="65.8"
        y="8"
        width="54.9"
        height="16.1834862"
      />
    </g>
  )
}

const FaceRoboCop = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M126,79.5857961 L126,104 C126,112.836556 118.836556,120 110,120 L20,120 C11.163444,120 4,112.836556 4,104 L4,79.5857961 L0,79.5857961 L1.10489633e-15,41.0221632 C-6.41976585e-16,26.7578634 1.48520978,21.5852836 4.27412326,16.3704687 C7.06303674,11.1556539 11.1556539,7.06303674 16.3704687,4.27412326 C21.5852836,1.48520978 26.7578634,-7.71967361e-14 41.0221632,-7.98170454e-14 L88.9778368,-7.65023564e-14 C103.242137,-7.91226658e-14 108.414716,1.48520978 113.629531,4.27412326 C118.844346,7.06303674 122.936963,11.1556539 125.725877,16.3704687 C128.51479,21.5852836 130,26.7578634 130,41.0221632 L130,79.5857961 L126,79.5857961 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use id="Dead-or-alive" fill="#0076DE" xlinkHref={`#${pathName}`} />
      <rect
        id="Murphy"
        fillOpacity="0.8"
        fill="#000000"
        mask={`url(#${maskName})`}
        x="4"
        y="80"
        width="122"
        height="40"
      />
    </g>
  )
}

const FaceRound02 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M0,89 C0,88.9795073 0.0141049326,89.1836401 0,90 C0.183374957,90.4764708 0.402008635,91.4971444 1,93 C1.82671155,96.0560243 3.7804036,99.5565275 7,103 C16.6943975,113.399831 35.1723647,120 65,120 C94.8276353,120 113.305603,113.399637 123,103 C126.219596,99.5565275 128.173198,96.0560243 129,93 C129.597973,91.4971251 129.816625,90.4764321 130,90 C129.985895,89.1836498 130,88.9795151 130,89 L130,50 C130,50.1036464 129.971788,49.4988099 130,49 C129.739042,46.8828777 129.471022,44.9851234 129,43 C127.813584,37.0088305 125.606104,31.0889814 122,26 C112.282973,9.66267383 94.2553094,0 65,0 C35.7447556,0 17.7163695,9.66228674 8,26 C4.39414151,31.089175 2.18649928,37.0088305 1,43 C0.529043306,44.9851234 0.26102792,46.8828583 0,49 C0.0282766705,49.4534424 6.49996895e-05,50.3228972 0,50 L0,89 Z"
        transform="translate(65.000000, 60.000000) scale(1, -1) translate(-65.000000, -60.000000)"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use id="Round-and-Soft" fill="#E1E6E8" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const FaceSquare02 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path-1`
  const maskName = `${id}-mask-1`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M12,0 L118,0 C124.627417,-1.21743675e-15 130,5.372583 130,12 L130,82 C130,102.98682 112.98682,120 92,120 L38,120 C17.0131795,120 2.57014425e-15,102.98682 0,82 L0,12 C-8.11624501e-16,5.372583 5.372583,1.21743675e-15 12,0 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use id="Shape" fill="#0076DE" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const FaceSquare03 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path-1`
  const maskName = `${id}-mask-1`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M18,-2.7000624e-13 L112,-2.91322522e-13 C121.941125,-2.93148677e-13 130,8.0588745 130,18 L130,45.1482908 C130,49.6830734 129.22888,54.1848394 127.719613,58.4610955 L110.238555,107.990762 C107.698575,115.187372 100.896418,120 93.2647285,120 L36.7352715,120 C29.1035817,120 22.3014253,115.187372 19.7614455,107.990762 L2.28038666,58.4610955 C0.771119772,54.1848394 1.50531546e-15,49.6830734 -7.10542736e-15,45.1482908 L-9.9475983e-14,18 C-1.18352406e-13,8.0588745 8.0588745,-2.86048235e-13 18,-3.05533376e-13 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use id="Shape" fill="#0076DE" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const FaceSquare04 = ({ id }: FaceComponentProps) => {
  const pathName = `${id}-path-1`
  const maskName = `${id}-mask-1`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M0,102 L0,68.8517092 C8.61074282e-15,64.3169266 0.771119772,59.8151606 2.28038666,55.5389045 L19.7614455,12.0092379 C22.3014253,4.81262825 29.1035817,1.42108547e-14 36.7352715,1.42108547e-14 L93.2647285,0 C100.896418,0 107.698575,4.81262825 110.238555,12.0092379 L127.719613,55.5389045 C129.22888,59.8151606 130,64.3169266 130,68.8517092 L130,102 C130,111.941125 121.941125,120 112,120 L18,120 C8.0588745,120 -1.8876423e-14,111.941125 0,102 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use id="Shape" fill="#0076DE" xlinkHref={`#${pathName}`} />
    </g>
  )
}

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

  const faceId = `Face/${faceType}`
  const maskId = `${faceId}-mask`

  return (
    <>
      <FaceComponent id={faceId} />
      <FaceColor maskID={maskId}>
        <rect x="0" y="0" width="130" height="120" />
      </FaceColor>
      <Texture maskId={maskId} />
    </>
  )
}
