import { Bot, Piece } from './src'

// Example usage of the modern Bot component
export function BotExample() {
  return (
    <Bot
      botStyle="Circle"
      circleColor="BlueGrey300"
      topType="Bulb02"
      topColor="BlueGrey500"
      faceType="Square01"
      faceColor="BlueGrey500"
      textureType="None"
      eyeType="Round"
      mouthType="Square01"
      sideType="Square"
      sidesColor="BlueGrey500"
      size={200}
    />
  )
}

// Example usage of individual pieces
export function PieceExample() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Piece
        pieceType="top"
        botStyle="Circle"
        topType="Bulb02"
        topColor="BlueGrey500"
        pieceSize={100}
      />
      <Piece
        pieceType="face"
        botStyle="Circle"
        faceType="Square01"
        faceColor="BlueGrey500"
        textureType="None"
        pieceSize={100}
      />
      <Piece
        pieceType="eye"
        botStyle="Circle"
        eyeType="Round"
        pieceSize={100}
      />
    </div>
  )
}