export type BotStyle = 'Circle' | 'Transparent'

export type CircleColor =
  | 'Blue01'
  | 'Blue02'
  | 'Blue03'
  | 'BlueGrey01'
  | 'BlueGrey02'
  | 'BlueGrey03'
  | 'BlueGrey300'
  | 'BlueGrey500'
  | 'Orange01'
  | 'Orange02'
  | 'Orange03'
  | 'Red01'
  | 'Red02'
  | 'Red03'
  | 'Yellow01'
  | 'Yellow02'
  | 'Yellow03'

export type TopType =
  | 'Antenna'
  | 'AntennaCrooked'
  | 'Bulb01'
  | 'Bulb02'
  | 'GlowingBulb01'
  | 'GlowingBulb02'
  | 'Horns'
  | 'Lights'
  | 'Plankton'
  | 'Pyramid'
  | 'Radar'

export type TopColor = CircleColor

export type FaceType =
  | 'Arturito'
  | 'RoboCop'
  | 'Round01'
  | 'Round02'
  | 'Square01'
  | 'Square02'
  | 'Square03'
  | 'Square04'

export type FaceColor = CircleColor

export type TextureType = 'None' | 'Circuits' | 'Dots' | 'Dirty01' | 'Dirty02'

export type EyeType =
  | 'Arturito'
  | 'Bulging'
  | 'Dizzy'
  | 'Eva'
  | 'Frame01'
  | 'Frame02'
  | 'Glow'
  | 'Hal'
  | 'Happy'
  | 'Hearts'
  | 'RoboCop'
  | 'Round'
  | 'RoundFrame01'
  | 'RoundFrame02'
  | 'Sensor'
  | 'Shades'

export type MouthType =
  | 'Arturito'
  | 'Bite'
  | 'Diagram'
  | 'Grill01'
  | 'Grill02'
  | 'Grill03'
  | 'RoboCop'
  | 'Smile01'
  | 'Smile02'
  | 'Square01'
  | 'Square02'

export type SideType =
  | 'Antenna01'
  | 'Antenna02'
  | 'Cables01'
  | 'Cables02'
  | 'Round'
  | 'Square'
  | 'SquareAsymmetric'

export type SidesColor = CircleColor

export interface BotOptions {
  botStyle: BotStyle
  circleColor?: CircleColor
  topType?: TopType
  topColor?: TopColor
  faceType?: FaceType
  faceColor?: FaceColor
  textureType?: TextureType
  eyeType?: EyeType
  mouthType?: MouthType
  sideType?: SideType
  sidesColor?: SidesColor
}

export interface BotProps extends BotOptions {
  style?: import('react').CSSProperties
  size?: number
  className?: string
}

export type PieceType = 'top' | 'face' | 'eye' | 'mouth' | 'sides'

export interface PieceOptions extends BotOptions {
  pieceType: PieceType
  pieceSize?: string | number
}

export interface PieceProps extends PieceOptions {
  style?: import('react').CSSProperties
  className?: string
}
