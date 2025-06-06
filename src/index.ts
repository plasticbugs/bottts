// Main components
export { Bot } from './components/Bot'
export { Piece } from './components/Piece'

// Context
export { BotProvider, useBotContext } from './context/BotContext'

// Types
export type {
  BotStyle,
  BotOptions,
  BotProps,
  PieceType,
  PieceOptions,
  PieceProps,
  CircleColor,
  TopType,
  TopColor,
  FaceType,
  FaceColor,
  TextureType,
  EyeType,
  MouthType,
  SideType,
  SidesColor,
} from './types'

// Individual part components (for advanced usage)
export {
  CircleColor as CircleColorComponent,
  Eyes,
  Face,
  Mouth,
  Sides,
  Top,
} from './components/parts'

// Default export (legacy compatibility)
export { Bot as default } from './components/Bot'
