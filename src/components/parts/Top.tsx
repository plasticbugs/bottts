import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { TopType } from '../../types'
import { CircleColor } from './CircleColor'

interface TopColorProps {
  maskID: string
  children: React.ReactNode
}

// Modern TopColor component using CircleColor
const TopColor = ({ maskID, children }: TopColorProps) => {
  const { topColor } = useBotContext()
  return (
    <CircleColor maskID={maskID} color={topColor}>
      {children}
    </CircleColor>
  )
}

const TopAntenna = () => {
  const pieceId = 'Top/Antenna'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M10,31 L10,0 L14,0 L14,31 L22,31 C23.1045695,31 24,31.8954305 24,33 L24,47 L0,47 L0,33 C-1.3527075e-16,31.8954305 0.8954305,31 2,31 L10,31 Z"
        id={pathName}
      />

      <g id="Antenna" transform="translate(38.000000, 5.000000)">
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
        <use fill="#E1E6E8" xlinkHref={`#${pathName}`} />
        <TopColor maskID={maskName}>
          <g transform="translate(-38.000000, -5.000000)">
            <rect x="0" y="0" width="100" height="52" />
          </g>
        </TopColor>
        <rect
          id="Lite"
          fillOpacity="0.2"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="0"
          y="31"
          width="24"
          height="16"
        />
      </g>
      <circle id="Beep-Boop" fill="#FFE65C" cx="50" cy="8" r="8" />
      <circle id="Beep-Boop" fill="#FFFFFF" cx="53" cy="5" r="3" />
    </g>
  )
}

const TopAntennaCrooked = () => {
  const pieceId = 'Top/AntennaCrooked'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M15.5683097,27 L24,27 L24,40 L7.10542736e-15,40 L7.10542736e-15,27 L12.0880581,27 L14.1789906,22.5630665 L8.12882501,12.1305168 L11.3538641,0.294936464 L14.2483322,1.08364073 L11.352836,11.7098307 L17.5437409,22.3850631 L15.5683097,27 Z"
        id={pathName}
      />
      <g id="Antenna" transform="translate(38.000000, 12.000000)">
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
        <use fill="#E6E6E6" fillRule="nonzero" xlinkHref={`#${pathName}`} />
        <TopColor maskID={maskName}>
          <g transform="translate(-38.000000, -12.000000)">
            <rect x="0" y="0" width="100" height="52" />
          </g>
        </TopColor>
        <rect
          id="Lite"
          fillOpacity="0.2"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="0"
          y="27"
          width="24"
          height="13"
        />
      </g>
      <circle id="Beep-Boop" fill="#FFE65C" cx="50" cy="8" r="8" />
      <circle id="Beep-Boop" fill="#FFFFFF" cx="53" cy="5" r="3" />
    </g>
  )
}

const TopBulb01 = () => {
  const pieceId = 'Top/Bulb-01'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M70,36 L79,36 C79.5522847,36 80,36.4477153 80,37 L80,51 C80,51.5522847 79.5522847,52 79,52 L21,52 C20.4477153,52 20,51.5522847 20,51 L20,37 C20,36.4477153 20.4477153,36 21,36 L30,36 L30,33 C30,21.954305 38.954305,13 50,13 C61.045695,13 70,21.954305 70,33 L70,36 Z"
        id={pathName}
      />
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Bulb-Mask" fill="#59C4FF" xlinkHref={`#${pathName}`} />
      <TopColor maskID={maskName}>
        <rect x="0" y="0" width="100" height="52" />
      </TopColor>
      <path
        d="M50,36 C52.209139,36 54,35.0279942 54,31.7142857 C54,28.4005772 52.209139,24 50,24 C47.790861,24 46,28.4005772 46,31.7142857 C46,35.0279942 47.790861,36 50,36 Z"
        id="Light"
        fillOpacity="0.6"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
      <rect
        id="Highlight"
        fillOpacity="0.4"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        x="20"
        y="13"
        width="60"
        height="23"
      />
      <path
        d="M50,15.5 C54.9315485,15.5 59.3660426,17.6281427 62.4352098,21.0161556 M64.8733745,24.5107242 C65.5630474,25.8293043 66.0825179,27.2509729 66.4026217,28.7465657"
        id="Reflection"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        mask={`url(#${maskName})`}
      />
    </g>
  )
}

const TopBulb02 = () => {
  const pieceId = 'Top/Bulb-02'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M60,40 L77,40 C77.5522847,40 78,40.4477153 78,41 L78,51 C78,51.5522847 77.5522847,52 77,52 L23,52 C22.4477153,52 22,51.5522847 22,51 L22,41 C22,40.4477153 22.4477153,40 23,40 L40,40 C35.581722,40 32,36.418278 32,32 L32,16 C32,7.163444 39.163444,1.623249e-15 48,0 L52,0 C60.836556,-1.623249e-15 68,7.163444 68,16 L68,32 C68,36.418278 64.418278,40 60,40 Z"
        id={pathName}
      />
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Bulb-Mask" fill="#59C4FF" xlinkHref={`#${pathName}`} />
      <TopColor maskID={maskName}>
        <rect x="0" y="0" width="100" height="52" />
      </TopColor>
      <rect
        id="Highlight"
        fillOpacity="0.4"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        x="20"
        y="-3"
        width="60"
        height="43"
      />
      <path
        d="M49,3.5 C53.9315485,3.5 58.3660426,5.62814271 61.4352098,9.01615555"
        id="Reflection"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        mask={`url(#${maskName})`}
      />
      <path
        d="M49.8284271,26 L50.3137085,26 L59.3137085,17 L62.1421356,19.8284271 L52,29.9705627 L52,40 L48,40 L48,29.8284271 L38,19.8284271 L40.8284271,17 L49.8284271,26 Z"
        id="Why"
        fillOpacity="0.8"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
    </g>
  )
}

const TopGlowingBulb01 = () => {
  const pieceId = 'Top/GlowingBulb01'
  const pathName1 = `${pieceId}-path-1`
  const pathName2 = `${pieceId}-path-2`
  const filterName1 = `${pieceId}-filter-1`
  const filterName2 = `${pieceId}-filter-2`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M48,8 L52,8 C60.836556,8 68,15.163444 68,24 L68,32 C68,36.418278 64.418278,40 60,40 L40,40 C35.581722,40 32,36.418278 32,32 L32,24 C32,15.163444 39.163444,8 48,8 Z"
          id={pathName1}
        />
        <filter
          x="-33.3%"
          y="-37.5%"
          width="166.7%"
          height="175.0%"
          filterUnits="objectBoundingBox"
          id={filterName1}
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="4"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-27.8%"
          y="-31.2%"
          width="155.6%"
          height="162.5%"
          filterUnits="objectBoundingBox"
          id={filterName2}
        >
          <feGaussianBlur
            stdDeviation="2"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
        <rect id={pathName2} x="22" y="40" width="56" height="12" rx="1" />
      </defs>

      <g id="Bulb">
        <use
          fill="black"
          fillOpacity="1"
          filter={`url(#${filterName1})`}
          xlinkHref={`#${pathName1}`}
        />
        <use
          fillOpacity="0.300000012"
          fill="#FFFFFF"
          fillRule="evenodd"
          xlinkHref={`#${pathName1}`}
        />
        <use
          fill="black"
          fillOpacity="1"
          filter={`url(#${filterName2})`}
          xlinkHref={`#${pathName1}`}
        />
      </g>
      <path
        d="M49,11.5 C53.9315485,11.5 58.3660426,13.6281427 61.4352098,17.0161556"
        id="Reflection"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M49.8284271,29 L50.3137085,29 L59.3137085,20 L62.1421356,22.8284271 L52,32.9705627 L52,40 L48,40 L48,32.8284271 L38,22.8284271 L40.8284271,20 L49.8284271,29 Z"
        id="Why"
        fillOpacity="0.8"
        fill="#FFFFFF"
      />
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName2}`} />
      </mask>
      <use id="Band" fill="#48494B" xlinkHref={`#${pathName2}`} />
    </g>
  )
}

const TopGlowingBulb02 = () => {
  const pieceId = 'Top/GlowingBulb02'
  const pathName1 = `${pieceId}-path-1`
  const pathName2 = `${pieceId}-path-2`
  const pathName3 = `${pieceId}-path-3`
  const filterName1 = `${pieceId}-filter-1`
  const filterName2 = `${pieceId}-filter-2`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M50,13 L50,13 C61.045695,13 70,21.954305 70,33 L70,44 L30,44 L30,33 C30,21.954305 38.954305,13 50,13 Z"
          id={pathName1}
        />
        <filter
          x="-30.0%"
          y="-38.7%"
          width="160.0%"
          height="177.4%"
          filterUnits="objectBoundingBox"
          id={filterName1}
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="4"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-25.0%"
          y="-32.3%"
          width="150.0%"
          height="164.5%"
          filterUnits="objectBoundingBox"
          id={filterName2}
        >
          <feGaussianBlur
            stdDeviation="2"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>

      <g id="Bulb">
        <use
          fill="black"
          fillOpacity="1"
          filter={`url(#${filterName1})`}
          xlinkHref={`#${pathName1}`}
        />
        <use
          fillOpacity="0.300000012"
          fill="#FFFFFF"
          fillRule="evenodd"
          xlinkHref={`#${pathName1}`}
        />
        <use
          fill="black"
          fillOpacity="1"
          filter={`url(#${filterName2})`}
          xlinkHref={`#${pathName1}`}
        />
      </g>
      <path
        d="M50,36 C52.209139,36 54,35.0279942 54,31.7142857 C54,28.4005772 52.209139,24 50,24 C47.790861,24 46,28.4005772 46,31.7142857 C46,35.0279942 47.790861,36 50,36 Z"
        id="Light"
        fillOpacity="0.6"
        fill="#FFFFFF"
      />
      <path
        d="M50,15.5 C54.9315485,15.5 59.3660426,17.6281427 62.4352098,21.0161556 M64.8733745,24.5107242 C65.5630474,25.8293043 66.0825179,27.2509729 66.4026217,28.7465657"
        id="Reflection"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName1}`} />
      </mask>

      <TopColor maskID={maskName}>
        <rect id={pathName3} x="20" y="36" width="60" height="16" rx="1" />
      </TopColor>

      <use id="Band" fill="#48494B" xlinkHref={`#${pathName2}`} />
    </g>
  )
}

const TopHorns = () => {
  const pieceId = 'Top/Horns'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M71.2103664,40 C78.849875,33.2931152 84.6313286,20.6881892 84,14 C83.8634599,12.5535174 85.9998112,12.299289 87,14 C90.3310591,19.6640994 91.0533229,28.3307631 89.1667915,39.9999912 L92,40 L92,52 L66,52 L66,40 L71.2103664,40 Z M11.2146853,40 C9.04339114,28.3168723 9.78304742,19.6838312 13.4336542,14.1008765 C14.3353248,12.7219314 16.5210219,12.6807087 16.5210219,13.7408438 C16.5210219,21.2733229 21.4918044,33.4449643 29.2618055,40 L34,40 L34,52 L8,52 L8,40 L11.2146853,40 Z"
          id={pathName}
        />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Horns" fill="#E1E6E8" xlinkHref={`#${pathName}`} />
      <TopColor maskID={maskName}>
        <rect x="0" y="0" width="100" height="52" />
      </TopColor>
      <rect
        id="Shadow"
        fillOpacity="0.4"
        fill="#000000"
        mask={`url(#${maskName})`}
        x="0"
        y="40"
        width="100"
        height="12"
      />
      <path
        d="M15.4558151,13 L31.5688672,13 L31.5688672,40 L20.8200683,40 C15.8541795,34.7666145 14.0660951,25.7666145 15.4558151,13 Z"
        id="Light"
        fillOpacity="0.4"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
      <path
        d="M84.8200683,13 L92.5688672,13 L92.5688672,40 L81.8200683,40 C85.6540878,34.7964297 86.6540878,25.7964297 84.8200683,13 Z"
        id="Light"
        fillOpacity="0.4"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
    </g>
  )
}

const TopLights = () => {
  const pieceId = 'Top/Lights'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M56,18 L56,5 C56,2.23857625 58.2385763,5.07265313e-16 61,0 L67,0 C69.7614237,-5.07265313e-16 72,2.23857625 72,5 L72,18 L78,18 C79.1045695,18 80,18.8954305 80,20 L80,30 L0,30 L0,20 C-1.3527075e-16,18.8954305 0.8954305,18 2,18 L8,18 L8,5 C8,2.23857625 10.2385763,5.07265313e-16 13,0 L19,0 C21.7614237,-5.07265313e-16 24,2.23857625 24,5 L24,18 L32,18 L32,5 C32,2.23857625 34.2385763,5.07265313e-16 37,0 L43,0 C45.7614237,-5.07265313e-16 48,2.23857625 48,5 L48,18 L56,18 Z"
          id={pathName}
        />
      </defs>
      <g id="Bulbs" transform="translate(10.000000, 22.000000)">
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
        <use fill="#E1E6E8" xlinkHref={`#${pathName}`} />
        <TopColor maskID={maskName}>
          <g transform="translate(-10.000000, -22.000000)">
            <rect x="0" y="0" width="100" height="52" />
          </g>
        </TopColor>
        <rect
          id="Highlite"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="-10"
          y="-22"
          width="100"
          height="40"
        />
        <rect
          id="Light"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="14"
          y="6"
          width="4"
          height="8"
          rx="2"
        />
        <rect
          id="Light"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="38"
          y="6"
          width="4"
          height="8"
          rx="2"
        />
        <rect
          id="Light"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          x="62"
          y="6"
          width="4"
          height="8"
          rx="2"
        />
      </g>
    </g>
  )
}

const TopPlankton = () => {
  const pieceId = 'Top/Plankton'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M0,0 C0,6.418278 1.28514913,11 6.5,11 C11.7148509,11 13,6.418278 13,0"
          id={pathName}
        />
      </defs>
      <path
        d="M13.5,51.5 L86.5,51.5 L86.5,22 C86.5,10.1048506 78.7743593,0.5 69.3043478,0.5 L30.6956522,0.5 C21.2256407,0.5 13.5,10.1048506 13.5,22 L13.5,51.5 Z"
        id="Case"
        stroke="#ECECEC"
        fillOpacity="0.5"
        fill="#FFFFFF"
      />
      <g id="Plankton" transform="translate(20.000000, 1.000000)">
        <path
          d="M4,27 C7.32929829,37.5297416 11.995965,43.1964083 18,44"
          id="Arm"
          stroke="#6C9D91"
          strokeWidth="3.2"
        />
        <path
          d="M41,34 C44.3292983,40.1939656 48.995965,43.527299 55,44"
          id="Arm"
          stroke="#6C9D91"
          strokeWidth="3.2"
          transform="translate(48.000000, 39.000000) scale(-1, 1) translate(-48.000000, -39.000000) "
        />
        <path
          d="M16,0 C17.8048884,3.09304639 19.8048884,8.68897612 22,17.0526316 L19.75,18 C18.105591,9.73615925 16.8743332,3.73615925 16,0 Z"
          id="Antenna"
          fill="#08754F"
        />
        <path
          d="M38,0 C39.8048884,3.09304639 41.8048884,8.68897612 44,17.0526316 L41.75,18 C40.105591,9.73615925 38.8743332,3.73615925 38,0 Z"
          id="Antenna"
          fill="#08754F"
          transform="translate(41.000000, 9.000000) scale(-1, 1) translate(-41.000000, -9.000000) "
        />
        <path
          d="M30,9 L30,9 C37.1797017,9 43,14.8202983 43,22 L43,51 L17,51 L17,22 C17,14.8202983 22.8202983,9 30,9 Z"
          id="Body"
          fill="#78ADA0"
        />
        <circle id="Eye" fill="#F7EDA2" cx="30" cy="21" r="6" />
        <rect
          id="Controller-Stick"
          fill="#2E3539"
          x="4"
          y="14"
          width="2"
          height="37"
        />
        <rect
          id="Controller-Stick"
          fill="#2E3539"
          x="55"
          y="20"
          width="2"
          height="31"
        />
        <circle id="Controller-Knob" fill="#2E3539" cx="5" cy="15" r="5" />
        <circle id="Controller-Knob" fill="#2E3539" cx="56" cy="24" r="5" />
        <ellipse id="Pupil" fill="#EF3838" cx="30" cy="21" rx="2" ry="3" />
        <path
          d="M22,13.734623 L24.8490403,12 C26.6825156,15.3656655 33.3174844,15.3656655 35.1509597,12 L38,13.734623 C34.9018654,19.4217923 25.0981346,19.4217923 22,13.734623 Z"
          id="Eyebrow"
          fill="#232827"
          fillRule="nonzero"
        />
        <g id="Smile" transform="translate(24.000000, 29.000000)">
          <mask id={maskName} fill="white">
            <use xlinkHref={`#${pathName}`} />
          </mask>
          <use id="Mouth" fill="#94231A" xlinkHref={`#${pathName}`} />
          <ellipse
            id="tongue"
            fill="#EC7651"
            mask={`url(#${maskName})`}
            cx="4.0625"
            cy="12"
            rx="4.0625"
            ry="4"
          />
          <ellipse
            id="tongue"
            fill="#EC7651"
            mask={`url(#${maskName})`}
            cx="8.9375"
            cy="12"
            rx="4.0625"
            ry="4"
          />
          <rect
            id="Teeth"
            fill="#ECFAF7"
            mask={`url(#${maskName})`}
            x="0"
            y="0"
            width="13"
            height="3.2"
          />
        </g>
        <circle id="hand" fill="#78ADA0" cx="4" cy="25" r="4" />
        <circle id="hand" fill="#78ADA0" cx="56" cy="33" r="4" />
      </g>
      <rect id="Bottom" fill="#2E3539" x="11" y="46" width="78" height="6" />
    </g>
  )
}

const TopPyramid = () => {
  const pieceId = 'Top/Pyramid'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <polygon id={pathName} points="50 8 82 52 18 52" />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Triangle" fill="#E1E6E8" xlinkHref={`#${pathName}`} />
      <TopColor maskID={maskName}>
        <rect x="0" y="0" width="100" height="52" />
      </TopColor>
      <rect
        id="Highlight"
        fillOpacity="0.8"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        x="50"
        y="4"
        width="30"
        height="48"
      />
    </g>
  )
}

const TopRadar = () => {
  const pieceId = 'Top/Radar'
  const pathName = `${pieceId}-path`
  const maskName = `${pieceId}-mask`

  return (
    <g
      id={pieceId}
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path
          d="M47.9411255,31.5810711 C46.4603547,30.7251846 45.0658376,29.6638174 43.7989899,28.3969696 C35.988504,20.5864838 35.988504,7.92318421 43.7989899,0.112698372 L57.2340187,13.5477272 L63.6870876,7.09465837 C62.7811534,5.56075283 62.987153,3.55195222 64.3050865,2.23401872 C65.8671837,0.671921549 68.3998436,0.671921549 69.9619408,2.23401872 C71.5240379,3.79611588 71.5240379,6.3287758 69.9619408,7.89087297 C68.6440073,9.20880647 66.6352067,9.41480612 65.1013011,8.50887193 L58.6482323,14.9619408 L72.0832611,28.3969696 C66.6329618,33.8472689 58.8195836,35.4942501 51.9411255,33.3379131 L51.9411255,52.1126984 L47.9411255,52.1126984 L47.9411255,31.5810711 Z"
          id={pathName}
        />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Radar" fill="#E1E6E8" xlinkHref={`#${pathName}`} />
      <TopColor maskID={maskName}>
        <rect x="0" y="0" width="100" height="52" />
      </TopColor>
      <path
        d="M43.7989899,0.112698372 C35.988504,7.92318421 35.988504,20.5864838 43.7989899,28.3969696 C51.6094757,36.2074555 64.2727753,36.2074555 72.0832611,28.3969696"
        id="Dish"
        fillOpacity="0.2"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
      <circle
        id="Searching..."
        fillOpacity="0.8"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        cx="67.1335137"
        cy="5.06244584"
        r="4"
      />
    </g>
  )
}

const topComponents: Record<TopType, ComponentType<Record<string, never>>> = {
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

  return <TopComponent />
}
