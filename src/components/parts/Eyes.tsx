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

const EyeDizzy = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <path
      d="M25,27.2 L19.5,32.7 C19.1,33.1 18.4,33.1 17.9,32.7 L16.3,31.1 C15.9,30.7 15.9,30 16.3,29.5 L21.8,24 L16.3,18.5 C15.9,18 15.9,17.3 16.3,16.9 L17.9,15.3 C18.3,14.9 19,14.9 19.5,15.3 L25,20.8 L30.5,15.3 C30.9,14.9 31.6,14.9 32.1,15.3 L33.7,16.9 C34.1,17.3 34.1,18 33.7,18.5 L28.2,24 L33.7,29.5 C34.1,29.9 34.1,30.6 33.7,31.1 L32.1,32.7 C31.7,33.1 31,33.1 30.5,32.7 L25,27.2 Z"
      id="Eye"
      fill="#000000"
      fillRule="nonzero"
    />
    <path
      d="M79,27.2 L73.5,32.7 C73.1,33.1 72.4,33.1 71.9,32.7 L70.3,31.1 C69.9,30.7 69.9,30 70.3,29.5 L75.8,24 L70.3,18.5 C69.9,18 69.9,17.3 70.3,16.9 L71.9,15.3 C72.3,14.9 73,14.9 73.5,15.3 L79,20.8 L84.5,15.3 C84.9,14.9 85.6,14.9 86.1,15.3 L87.7,16.9 C88.1,17.3 88.1,18 87.7,18.5 L82.2,24 L87.7,29.5 C88.1,29.9 88.1,30.6 87.7,31.1 L86.1,32.7 C85.7,33.1 85,33.1 84.5,32.7 L79,27.2 Z"
      id="Eye"
      fill="#000000"
      fillRule="nonzero"
    />
  </g>
)

const EyeGlow = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <circle id="Eye" fillOpacity="0.1" fill="#FFFFFF" cx="21" cy="30" r="15" />
    <circle id="Eye" fillOpacity="0.1" fill="#FFFFFF" cx="83" cy="30" r="15" />
    <circle id="Eye" fillOpacity="0.1" fill="#FFFFFF" cx="21" cy="30" r="12" />
    <circle id="Eye" fillOpacity="0.1" fill="#FFFFFF" cx="83" cy="30" r="12" />
    <circle id="Eye" fillOpacity="0.8" fill="#FFFFFF" cx="21" cy="30" r="6" />
    <circle id="Eye" fillOpacity="0.8" fill="#FFFFFF" cx="83" cy="30" r="6" />
    <circle id="Eye" fillOpacity="0.8" fill="#FFFFFF" cx="21" cy="30" r="3" />
    <circle id="Eye" fillOpacity="0.8" fill="#FFFFFF" cx="83" cy="30" r="3" />
  </g>
)

const EyeHearts = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <path
      d="M29.9583333,10 C27.4074091,10 24.8837273,11.9797894 23.5,13.8206358 C22.1106364,11.9797894 19.5925909,10 17.0416667,10 C11.5523182,10 8,13.3341032 8,17.6412715 C8,23.3708668 12.4118636,26.771228 17.0416667,30.376724 C18.695,31.6133636 21.8223436,34.7777086 22.2083333,35.470905 C22.5943231,36.1641015 24.3143077,36.1885229 24.7916667,35.470905 C25.2690257,34.7532872 28.3021818,31.6133636 29.9583333,30.376724 C34.5853182,26.771228 39,23.3708668 39,17.6412715 C39,13.3341032 35.4476818,10 29.9583333,10 Z"
      id="Heart"
      fill="#FF5353"
      fillRule="nonzero"
      transform="translate(23.500000, 23.000000) rotate(-3.000000) translate(-23.500000, -23.000000)"
    />
    <path
      d="M86.9583333,10 C84.4074091,10 81.8837273,11.9797894 80.5,13.8206358 C79.1106364,11.9797894 76.5925909,10 74.0416667,10 C68.5523182,10 65,13.3341032 65,17.6412715 C65,23.3708668 69.4118636,26.771228 74.0416667,30.376724 C75.695,31.6133636 78.8223436,34.7777086 79.2083333,35.470905 C79.5943231,36.1641015 81.3143077,36.1885229 81.7916667,35.470905 C82.2690257,34.7532872 85.3021818,31.6133636 86.9583333,30.376724 C91.5853182,26.771228 96,23.3708668 96,17.6412715 C96,13.3341032 92.4476818,10 86.9583333,10 Z"
      id="Heart"
      fill="#FF5353"
      fillRule="nonzero"
      transform="translate(80.500000, 23.000000) rotate(3.000000) translate(-80.500000, -23.000000)"
    />
  </g>
)

const EyeBulging = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <circle
      id="Container"
      fillOpacity="0.2"
      fill="#000000"
      cx="28"
      cy="24"
      r="18"
    />
    <circle
      id="Container"
      fillOpacity="0.2"
      fill="#000000"
      cx="74"
      cy="24"
      r="18"
    />
    <circle id="Cornea" fill="#F1EEDA" cx="28" cy="24" r="15" />
    <circle id="Cornea" fill="#F1EEDA" cx="74" cy="24" r="15" />
    <rect
      id="Iris"
      fillOpacity="0.8"
      fill="#000000"
      x="26"
      y="15"
      width="10"
      height="10"
      rx="2"
    />
    <rect
      id="Iris"
      fillOpacity="0.8"
      fill="#000000"
      x="74"
      y="15"
      width="10"
      height="10"
      rx="2"
    />
  </g>
)

// Keep the original shades implementation but with better masks
const EyeShadesNew = ({ id }: EyeComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M82.8310869,34 C78.274254,34.204594 75.2818899,35.6397034 73.8539945,38.3053279 C72.6354507,40.5801306 70.2641433,41.9999868 67.6835279,41.9999882 L52,42 L36.9013298,41.9999891 C34.0681565,41.9999875 31.4462964,40.5014832 30.0083339,38.0603493 C28.5305922,35.551685 25.5841186,34.1982352 21.1689131,34 L8,34 C3.581722,34 5.41083001e-16,30.418278 0,26 L0,8 C-5.41083001e-16,3.581722 3.581722,8.11624501e-16 8,0 L96,0 C100.418278,-8.11624501e-16 104,3.581722 104,8 L104,26 C104,30.418278 100.418278,34 96,34 L82.8310869,34 Z"
        id={pathName}
      />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use
        id="Container"
        fillOpacity="0.8"
        fill="#000000"
        xlinkHref={`#${pathName}`}
      />
      <path
        d="M74.8310869,24 C70.2742542,24.204594 67.2818901,25.6397032 65.8539947,28.3053276 C64.6854389,30.4868112 62.4567598,31.8820547 60,31.9928601 L60,32 L44.9013298,31.9999891 C42.0681565,31.9999875 39.4462964,30.5014832 38.0083339,28.0603493 C36.5305922,25.551685 33.5841186,24.1982352 29.1689131,24 L17,24 C14.2385763,24 12,21.7614237 12,19 L12,17 C12,14.2385763 14.2385763,12 17,12 L87,12 C89.7614237,12 92,14.2385763 92,17 L92,19 C92,21.7614237 89.7614237,24 87,24 L74.8310869,24 Z"
        id="Aww-Yeahh"
        fill="#FF3D3D"
        mask={`url(#${maskName})`}
      />
      <path
        d="M39,-4 L50,-4 L30,42 L19,42 L39,-4 Z M28,-4 L32,-4 L12,42 L8,42 L28,-4 Z"
        id="Highlight"
        fillOpacity="0.2"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
      />
    </g>
  )
}

const EyeArturito = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Radar-Eye" transform="translate(23.000000, 5.000000)">
      <path
        d="M50,0 L56,0 L58,32 L50,32 L50,38 L0,38 L9,0 L50,0 Z"
        id="R2-Eye"
        fillOpacity="0.8"
        fill="#0040AE"
      />
      <circle
        id="Outline"
        fillOpacity="0.2"
        fill="#000000"
        cx="26"
        cy="16"
        r="15"
      />
      <circle
        id="Eye"
        fillOpacity="0.6"
        fill="#000000"
        cx="26"
        cy="16"
        r="12"
      />
      <circle id="Shine" fill="#FFFFFF" cx="31" cy="9" r="2" />
    </g>
  </g>
)

const EyeEva = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <path
      d="M53,0 C87.746885,0 102.000559,17.474163 102,31 C101.999441,44.525837 82.4108252,48 53,48 C23.9528111,48 2,44.525837 2,31 C2,17.474163 17.1141791,3.17100737e-15 53,0 Z"
      id="Path-2"
      fillOpacity="0.8"
      fill="#000000"
    />
    <g
      id="EeeeVaaaa"
      transform="translate(18.000000, 16.000000)"
      fill="#25A6F5"
    >
      <path
        d="M10.817693,18.6539934 C4.29096139,17.3000653 -0.41691297,12.312077 0.302361333,7.51300959 C1.02163564,2.7139422 6.89568406,-0.0788950027 13.4224157,1.2750331 C19.9491473,2.6289612 24.6570217,7.61694957 23.9377474,12.416017 C23.2184731,17.2150843 17.3444247,20.0079215 10.817693,18.6539934 Z"
        id="vaaaa"
      />
      <path
        d="M57.4224157,18.6539934 C50.8956841,20.0079215 45.0216356,17.2150843 44.3023613,12.416017 C43.583087,7.61694957 48.2909614,2.6289612 54.817693,1.2750331 C61.3444247,-0.0788950027 67.2184731,2.7139422 67.9377474,7.51300959 C68.6570217,12.312077 63.9491473,17.3000653 57.4224157,18.6539934 Z"
        id="eeee"
      />
    </g>
  </g>
)

const EyeRoboCop = ({ id }: EyeComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id={pathName} x="7" y="16" width="91" height="16" rx="4" />
      <defs>
        <mask id={maskName} fill="white">
          <use xlinkHref={`#${pathName}`} />
        </mask>
      </defs>
      <use
        id="Container"
        fillOpacity="0.8"
        fill="#000000"
        xlinkHref={`#${pathName}`}
      />
      <polygon
        id="Reflection"
        fillOpacity="0.8"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        points="76 7 94 7 82 37 64 37"
      />
      <polygon
        id="Reflection"
        fillOpacity="0.8"
        fill="#FFFFFF"
        mask={`url(#${maskName})`}
        points="52 7 61 7 49 37 40 37"
      />
    </g>
  )
}

const EyeSensor = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Radar-Eye" transform="translate(8.000000, 4.000000)">
      <path
        d="M81.4160437,22 L39.9012495,22 C38.8978007,32.1066454 30.3706962,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C30.3706962,0 38.8978007,7.89335461 39.9012495,18 L81.4160437,18 C82.1876003,16.2340952 83.949681,15 86,15 C88.7614237,15 91,17.2385763 91,20 C91,22.7614237 88.7614237,25 86,25 C83.949681,25 82.1876003,23.7659048 81.4160437,22 Z"
        id="Connector"
        fillOpacity="0.2"
        fill="#000000"
      />
      <circle id="Shine" fill="#FFFFFF" cx="86" cy="20" r="2" />
      <circle
        id="Eye"
        fillOpacity="0.6"
        fill="#000000"
        cx="20"
        cy="20"
        r="16"
      />
      <circle id="Shine" fill="#FFFFFF" cx="26" cy="12" r="3" />
    </g>
  </g>
)

const EyeFrame01 = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Container"
      fillOpacity="0.8"
      fill="#000000"
      x="0"
      y="4"
      width="104"
      height="42"
      rx="4"
    />
    <rect id="Eye" fill="#8BDDFF" x="28" y="25" width="10" height="11" rx="2" />
    <rect id="Eye" fill="#8BDDFF" x="66" y="25" width="10" height="11" rx="2" />
    <polygon
      id="Reflection"
      fillOpacity="0.4"
      fill="#FFFFFF"
      points="21 4 29 4 12 46 4 46"
    />
  </g>
)

const EyeFrame02 = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Container"
      fillOpacity="0.8"
      fill="#000000"
      x="8"
      y="10"
      width="88"
      height="36"
      rx="4"
    />
    <rect id="Eye" fill="#5EF2B8" x="28" y="21" width="10" height="17" rx="2" />
    <rect id="Eye" fill="#5EF2B8" x="66" y="21" width="10" height="17" rx="2" />
    <polygon
      id="Reflection"
      fillOpacity="0.4"
      fill="#FFFFFF"
      points="83 10 88 10 76 46 71 46"
    />
  </g>
)

const EyeHal = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <circle id="9k" fillOpacity="0.4" fill="#FFFFFF" cx="52" cy="24" r="24" />
    <circle id="Hal" fillOpacity="0.8" fill="#000000" cx="52" cy="24" r="20" />
    <path
      d="M65.4099666,15.2688976 C64.255446,13.4993048 62.7601287,11.9723152 61.0171519,10.7810659 M56.6467057,8.68518644 C55.1761516,8.23958978 53.6160554,8 52,8 C49.9125219,8 47.9184128,8.3997603 46.0900522,9.12690144 M41.0773564,12.308221 C39.5172104,13.7663492 38.2491513,15.5330907 37.37049,17.5111349"
      id="Bright"
      strokeOpacity="0.9"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle id="Dave" fill="#C6080C" cx="52" cy="24" r="10" />
    <circle id="I-can't-do-that" fill="#EE9337" cx="52" cy="24" r="4" />
    <circle id="I'm-afraid" fill="#F5F94F" cx="52" cy="24" r="1" />
  </g>
)

const EyeRoundFrame01 = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Container"
      fillOpacity="0.8"
      fill="#000000"
      x="0"
      y="12"
      width="104"
      height="32"
      rx="16"
    />
    <rect id="Eye" fill="#F4F4F4" x="24" y="22" width="10" height="12" rx="2" />
    <rect id="Eye" fill="#F4F4F4" x="70" y="22" width="10" height="12" rx="2" />
  </g>
)

const EyeRoundFrame02 = ({ id }: EyeComponentProps) => (
  <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect
      id="Container"
      fillOpacity="0.8"
      fill="#000000"
      x="0"
      y="11"
      width="104"
      height="34"
      rx="17"
    />
    <circle id="Cornea" fill="#F1EEDA" cx="29" cy="28" r="13" />
    <circle id="Cornea" fill="#F1EEDA" cx="75" cy="28" r="13" />
    <rect
      id="Iris"
      fillOpacity="0.8"
      fill="#000000"
      x="24"
      y="23"
      width="10"
      height="10"
      rx="2"
    />
    <rect
      id="Iris"
      fillOpacity="0.8"
      fill="#000000"
      x="70"
      y="23"
      width="10"
      height="10"
      rx="2"
    />
  </g>
)

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
  Shades: EyeShadesNew,
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
