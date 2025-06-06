import type { ComponentType } from 'react'
import { useBotContext } from '../../context/BotContext'
import type { SideType } from '../../types'
import { SidesColor } from './SidesColor'

interface SidesComponentProps {
  id: string
}

const SidesSquare = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <defs>
        <path
          id={pathName}
          d="M0,0 L20,0 L20,76 L0,76 L0,0 Z M160,0 L180,0 L180,76 L160,76 L160,0 Z"
        />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Sides" fill="#607D8B" xlinkHref={`#${pathName}`} />
    </g>
  )
}

const SidesRound = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <defs>
        <path
          id={pathName}
          d="M10,0 C15.522847,0 20,17.0883464 20,38 C20,58.9116536 15.522847,76 10,76 C4.477153,76 0,58.9116536 0,38 C0,17.0883464 4.477153,0 10,0 Z M170,0 C175.522847,0 180,17.0883464 180,38 C180,58.9116536 175.522847,76 170,76 C164.477153,76 160,58.9116536 160,38 C160,17.0883464 164.477153,0 170,0 Z"
        />
      </defs>
      <mask id={maskName} fill="white">
        <use xlinkHref={`#${pathName}`} />
      </mask>
      <use id="Sides" fill="#607D8B" xlinkHref={`#${pathName}`} />
    </g>
  )
}

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

const SidesAntenna02 = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M152,19 L154.87223,19 C156.655267,19 157.30184,19.1856512 157.953691,19.5342654 C158.605543,19.8828796 159.11712,20.3944567 159.465735,21.0463086 C159.814349,21.6981604 160,22.3447329 160,24.1277704 L160,45.8722296 C160,47.6552671 159.814349,48.3018396 159.465735,48.9536914 C159.11712,49.6055433 158.605543,50.1171204 157.953691,50.4657346 C157.30184,50.8143488 156.655267,51 154.87223,51 L129.12777,51 C127.344733,51 126.69816,50.8143488 126.046309,50.4657346 C125.394457,50.1171204 124.88288,49.6055433 124.534265,48.9536914 C124.185651,48.3018396 124,47.6552671 124,45.8722296 L124,24.1277704 C124,22.3447329 124.185651,21.6981604 124.534265,21.0463086 C124.88288,20.3944567 125.394457,19.8828796 126.046309,19.5342654 C126.69816,19.1856512 127.344733,19 129.12777,19 L150,19 L150,0 L152,0 L152,19 Z M5.1277704,19 L30.8722296,19 C32.6552671,19 33.3018396,19.1856512 33.9536914,19.5342654 C34.6055433,19.8828796 35.1171204,20.3944567 35.4657346,21.0463086 C35.8143488,21.6981604 36,22.3447329 36,24.1277704 L36,45.8722296 C36,47.6552671 35.8143488,48.3018396 35.4657346,48.9536914 C35.1171204,49.6055433 34.6055433,50.1171204 33.9536914,50.4657346 C33.3018396,50.8143488 32.6552671,51 30.8722296,51 L5.1277704,51 C3.34473292,51 2.69816044,50.8143488 2.04630859,50.4657346 C1.39445674,50.1171204 0.882879593,49.6055433 0.534265408,48.9536914 C0.185651222,48.3018396 8.02470732e-17,47.6552671 -1.38112041e-16,45.8722296 L1.38112041e-16,24.1277704 C-8.02470732e-17,22.3447329 0.185651222,21.6981604 0.534265408,21.0463086 C0.882879593,20.3944567 1.39445674,19.8828796 2.04630859,19.5342654 C2.69816044,19.1856512 3.34473292,19 5.1277704,19 Z"
        id={pathName}
      />
      <g id="Ears" transform="translate(10.000000, 9.000000)">
        <defs>
          <mask id={maskName} fill="white">
            <use xlinkHref={`#${pathName}`} />
          </mask>
        </defs>
        <use fill="#0076DE" xlinkHref={`#${pathName}`} />
        <rect
          id="Shadow"
          fillOpacity="0.1"
          fill="#000000"
          mask={`url(#${maskName})`}
          x="-10"
          y="29"
          width="180"
          height="38"
        />
      </g>
      <g id="Antenna" transform="translate(157.000000, 1.000000)">
        <rect
          fillOpacity="0.4"
          fill="#FFFFFF"
          x="3"
          y="7"
          width="2"
          height="20"
        />
        <circle id="Beep-Boop" fill="#E1E6E8" cx="4" cy="4" r="4" />
        <circle id="Beep-Boop" fill="#FFFFFF" cx="5" cy="3" r="2" />
      </g>
    </g>
  )
}

const SidesCables01 = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M2,29 L14,29 C15.1045695,29 16,29.8954305 16,31 L16,49 C16,50.1045695 15.1045695,51 14,51 L2,51 C0.8954305,51 1.3527075e-16,50.1045695 0,49 L0,31 C-1.3527075e-16,29.8954305 0.8954305,29 2,29 Z M117,36 L136,36 C137.104569,36 138,36.8954305 138,38 L138,56 C138,57.1045695 137.104569,58 136,58 L117,58 C115.895431,58 115,57.1045695 115,56 L115,38 C115,36.8954305 115.895431,36 117,36 Z M117,0 L136,0 C137.104569,-2.02906125e-16 138,0.8954305 138,2 L138,16 C138,17.1045695 137.104569,18 136,18 L117,18 C115.895431,18 115,17.1045695 115,16 L115,2 C115,0.8954305 115.895431,2.02906125e-16 117,0 Z"
        id={pathName}
      />
      <g
        id="Cables-Left"
        opacity="0.9"
        transform="translate(13.000000, 11.000000)"
        stroke="#2A3544"
        strokeWidth="6"
      >
        <path
          d="M25,1 C22.0459826,12.6966281 5.09589655,7.66625764 1.63133076,19.0090388 C-1.83323502,30.35182 9.65649568,39 19.1552405,39"
          id="Cable"
        />
      </g>
      <g
        id="Cables-Right"
        opacity="0.9"
        transform="translate(150.000000, 19.000000)"
        stroke="#2A3544"
        strokeWidth="4"
      >
        <path
          d="M0,36 C8.39445109,39.4863785 20.1016531,28.4063428 16,19.5 C11.8983469,10.5936572 0,12.8056069 0,0.195051106"
          id="Cable"
        />
      </g>
      <g id="Connectors" transform="translate(21.000000, 6.000000)">
        <defs>
          <mask id={maskName} fill="white">
            <use xlinkHref={`#${pathName}`} />
          </mask>
        </defs>
        <use fill="#273951" xlinkHref={`#${pathName}`} />
      </g>
    </g>
  )
}

const SidesCables02 = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M2,27 L14,27 C15.1045695,27 16,27.8954305 16,29 L16,47 C16,48.1045695 15.1045695,49 14,49 L2,49 C0.8954305,49 1.3527075e-16,48.1045695 0,47 L0,29 C-1.3527075e-16,27.8954305 0.8954305,27 2,27 Z M3,60 L15,60 C16.1045695,60 17,60.8954305 17,62 L17,70 C17,71.1045695 16.1045695,72 15,72 L3,72 C1.8954305,72 1,71.1045695 1,70 L1,62 C1,60.8954305 1.8954305,60 3,60 Z M124,42 L136,42 C137.104569,42 138,42.8954305 138,44 L138,62 C138,63.1045695 137.104569,64 136,64 L124,64 C122.895431,64 122,63.1045695 122,62 L122,44 C122,42.8954305 122.895431,42 124,42 Z M124,0 L136,0 C137.104569,-2.02906125e-16 138,0.8954305 138,2 L138,20 C138,21.1045695 137.104569,22 136,22 L124,22 C122.895431,22 122,21.1045695 122,20 L122,2 C122,0.8954305 122.895431,2.02906125e-16 124,0 Z"
        id={pathName}
      />
      <g
        id="Cables-Left"
        opacity="0.9"
        transform="translate(8.000000, 5.000000)"
        stroke="#2A3544"
      >
        <ellipse
          id="Cable"
          strokeWidth="6"
          cx="24.5"
          cy="18"
          rx="16.5"
          ry="18"
        />
        <path
          d="M18.8032032,36.4616969 C18.8032032,27.9012833 11.6397592,20.9616969 2.80320323,20.9616969"
          id="Cable"
          strokeWidth="4"
          transform="translate(10.803203, 28.711697) scale(1, -1) rotate(-60.000000) translate(-10.803203, -28.711697)"
        />
        <path
          d="M20,62 C29.3888407,62 37,55.5081289 37,47.5 C37,39.4918711 29.3888407,33 20,33 C10.6111593,33 4,39.4918711 4,47.5 C4,55.5081289 10.6111593,62 20,62 Z"
          id="Cable"
          strokeWidth="4"
        />
      </g>
      <g
        id="Cables-Right"
        opacity="0.9"
        transform="translate(132.000000, 7.000000)"
        stroke="#2A3544"
      >
        <path
          d="M33.8032032,58.4616969 C33.8032032,49.9012833 26.6397592,42.9616969 17.8032032,42.9616969"
          id="Cable"
          strokeWidth="4"
          transform="translate(25.803203, 50.711697) rotate(-30.000000) translate(-25.803203, -50.711697)"
        />
        <path
          d="M16,31 C25.3888407,31 33,24.0604136 33,15.5 C33,6.93958638 25.3888407,0 16,0 C6.61115925,0 0,6.93958638 0,15.5 C0,24.0604136 6.61115925,31 16,31 Z"
          id="Cable"
          strokeWidth="6"
        />
      </g>
      <g id="Connectors" transform="translate(21.000000, 0.000000)">
        <defs>
          <mask id={maskName} fill="white">
            <use xlinkHref={`#${pathName}`} />
          </mask>
        </defs>
        <use fill="#273951" xlinkHref={`#${pathName}`} />
      </g>
    </g>
  )
}

const SidesSquareAsymmetric = ({ id }: SidesComponentProps) => {
  const pathName = `${id}-path`
  const maskName = `${id}-mask`

  return (
    <g id={id} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M160,15.0003274 C161.68664,15.0091031 162.317652,15.194108 162.953691,15.5342654 C163.605543,15.8828796 164.11712,16.3944567 164.465735,17.0463086 C164.814349,17.6981604 165,18.3447329 165,20.1277704 L165,39.8722296 C165,41.6552671 164.814349,42.3018396 164.465735,42.9536914 C164.11712,43.6055433 163.605543,44.1171204 162.953691,44.4657346 C162.317652,44.805892 161.68664,44.9908969 160,44.9996726 L160,54.8722296 C160,56.6552671 159.814349,57.3018396 159.465735,57.9536914 C159.11712,58.6055433 158.605543,59.1171204 157.953691,59.4657346 C157.30184,59.8143488 156.655267,60 154.87223,60 L129.12777,60 C127.344733,60 126.69816,59.8143488 126.046309,59.4657346 C125.394457,59.1171204 124.88288,58.6055433 124.534265,57.9536914 C124.185651,57.3018396 124,56.6552671 124,54.8722296 L124,5.1277704 C124,3.34473292 124.185651,2.69816044 124.534265,2.04630859 C124.88288,1.39445674 125.394457,0.882879593 126.046309,0.534265408 C126.69816,0.185651222 127.344733,1.2037061e-16 129.12777,-2.07168062e-16 L154.87223,2.07168062e-16 C156.655267,-1.2037061e-16 157.30184,0.185651222 157.953691,0.534265408 C158.605543,0.882879593 159.11712,1.39445674 159.465735,2.04630859 C159.814349,2.69816044 160,3.34473292 160,5.1277704 L160,15.0003274 Z M10,23 L10,12.1277704 C10,10.3447329 10.1856512,9.69816044 10.5342654,9.04630859 C10.8828796,8.39445674 11.3944567,7.88287959 12.0463086,7.53426541 C12.6981604,7.18565122 13.3447329,7 15.1277704,7 L30.8722296,7 C32.6552671,7 33.3018396,7.18565122 33.9536914,7.53426541 C34.6055433,7.88287959 35.1171204,8.39445674 35.4657346,9.04630859 C35.8143488,9.69816044 36,10.3447329 36,12.1277704 L36,28.1277704 L36,47.8722296 C36,49.6552671 35.8143488,50.3018396 35.4657346,50.9536914 C35.1171204,51.6055433 34.6055433,52.1171204 33.9536914,52.4657346 C33.3018396,52.8143488 32.6552671,53 30.8722296,53 L5.1277704,53 C3.34473292,53 2.69816044,52.8143488 2.04630859,52.4657346 C1.39445674,52.1171204 0.882879593,51.6055433 0.534265408,50.9536914 C0.185651222,50.3018396 8.02470732e-17,49.6552671 -1.38112041e-16,47.8722296 L1.38112041e-16,28.1277704 C-8.02470732e-17,26.3447329 0.185651222,25.6981604 0.534265408,25.0463086 C0.882879593,24.3944567 1.39445674,23.8828796 2.04630859,23.5342654 C2.69816044,23.1856512 3.34473292,23 5.1277704,23 L10,23 Z"
        id={pathName}
      />
      <g id="Ears" transform="translate(10.000000, 8.000000)">
        <defs>
          <mask id={maskName} fill="white">
            <use xlinkHref={`#${pathName}`} />
          </mask>
        </defs>
        <use fill="#0076DE" xlinkHref={`#${pathName}`} />
        <rect
          id="Shadow"
          fillOpacity="0.1"
          fill="#000000"
          mask={`url(#${maskName})`}
          x="-10"
          y="39"
          width="180"
          height="29"
        />
        <circle
          id="Beep"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          cx="151"
          cy="12"
          r="5"
        />
        <circle
          id="Beep"
          fillOpacity="0.6"
          fill="#FFFFFF"
          mask={`url(#${maskName})`}
          cx="151"
          cy="28"
          r="5"
        />
      </g>
    </g>
  )
}

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

  const sidesId = `Sides/${sideType}`
  const maskId = `${sidesId}-mask`

  return (
    <>
      <SidesComponent id={sidesId} />
      <SidesColor maskID={maskId}>
        <rect x="0" y="0" width="180" height="76" />
      </SidesColor>
    </>
  )
}
