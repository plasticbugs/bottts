import type { Meta, StoryObj } from '@storybook/react'
import { Piece } from './Piece'

const meta: Meta<typeof Piece> = {
  title: 'Components/Piece',
  component: Piece,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Individual bot pieces that can be displayed separately.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    pieceType: {
      control: { type: 'select' },
      options: ['top', 'face', 'eye', 'mouth', 'sides'],
      description: 'The type of piece to display',
    },
    pieceSize: {
      control: { type: 'range', min: 50, max: 200, step: 10 },
      description: 'Size of the piece in pixels',
    },
    botStyle: {
      control: { type: 'select' },
      options: ['Circle', 'Transparent'],
      description: 'The overall style/shape of the bot',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TopPiece: Story = {
  args: {
    pieceType: 'top',
    botStyle: 'Circle',
    topType: 'Bulb02',
    topColor: 'BlueGrey500',
    pieceSize: 100,
  },
}

export const FacePiece: Story = {
  args: {
    pieceType: 'face',
    botStyle: 'Circle',
    faceType: 'Square01',
    faceColor: 'BlueGrey500',
    textureType: 'None',
    pieceSize: 100,
  },
}

export const EyePiece: Story = {
  args: {
    pieceType: 'eye',
    botStyle: 'Circle',
    eyeType: 'Round',
    pieceSize: 100,
  },
}

export const MouthPiece: Story = {
  args: {
    pieceType: 'mouth',
    botStyle: 'Circle',
    mouthType: 'Square01',
    pieceSize: 100,
  },
}

export const SidesPiece: Story = {
  args: {
    pieceType: 'sides',
    botStyle: 'Circle',
    sideType: 'Square',
    sidesColor: 'BlueGrey500',
    pieceSize: 100,
  },
}

export const AllPieces: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Piece
          pieceType="top"
          botStyle="Circle"
          topType="GlowingBulb01"
          topColor="Yellow01"
          pieceSize={80}
        />
        <p>Top</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Piece
          pieceType="face"
          botStyle="Circle"
          faceType="Round01"
          faceColor="Blue02"
          textureType="None"
          pieceSize={80}
        />
        <p>Face</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Piece
          pieceType="eye"
          botStyle="Circle"
          eyeType="Happy"
          pieceSize={80}
        />
        <p>Eyes</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Piece
          pieceType="mouth"
          botStyle="Circle"
          mouthType="Smile01"
          pieceSize={80}
        />
        <p>Mouth</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Piece
          pieceType="sides"
          botStyle="Circle"
          sideType="Antenna01"
          sidesColor="Red01"
          pieceSize={80}
        />
        <p>Sides</p>
      </div>
    </div>
  ),
}
