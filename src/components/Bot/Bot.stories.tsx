import type { Meta, StoryObj } from '@storybook/react'
import { Bot } from './Bot'

const meta: Meta<typeof Bot> = {
  title: 'Components/Bot',
  component: Bot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The main Bot component for generating customizable robot avatars.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    botStyle: {
      control: { type: 'select' },
      options: ['Circle', 'Transparent'],
      description: 'The overall style/shape of the bot',
    },
    circleColor: {
      control: { type: 'select' },
      options: [
        'Blue01',
        'Blue02',
        'Blue03',
        'BlueGrey01',
        'BlueGrey02',
        'BlueGrey03',
        'BlueGrey300',
        'BlueGrey500',
        'Orange01',
        'Orange02',
        'Orange03',
        'Red01',
        'Red02',
        'Red03',
        'Yellow01',
        'Yellow02',
        'Yellow03',
      ],
      description: 'Background color (only visible when botStyle is Circle)',
    },
    topType: {
      control: { type: 'select' },
      options: [
        'Antenna',
        'AntennaCrooked',
        'Bulb01',
        'Bulb02',
        'GlowingBulb01',
        'GlowingBulb02',
        'Horns',
        'Lights',
        'Plankton',
        'Pyramid',
        'Radar',
      ],
      description: 'The top accessory of the bot',
    },
    topColor: {
      control: { type: 'select' },
      options: [
        'Blue01',
        'Blue02',
        'Blue03',
        'BlueGrey01',
        'BlueGrey02',
        'BlueGrey03',
        'BlueGrey300',
        'BlueGrey500',
        'Orange01',
        'Orange02',
        'Orange03',
        'Red01',
        'Red02',
        'Red03',
        'Yellow01',
        'Yellow02',
        'Yellow03',
      ],
      description: 'Color of the top accessory',
    },
    faceType: {
      control: { type: 'select' },
      options: [
        'Arturito',
        'RoboCop',
        'Round01',
        'Round02',
        'Square01',
        'Square02',
        'Square03',
        'Square04',
      ],
      description: 'The shape of the bots face',
    },
    eyeType: {
      control: { type: 'select' },
      options: [
        'Arturito',
        'Bulging',
        'Dizzy',
        'Eva',
        'Frame01',
        'Frame02',
        'Glow',
        'Hal',
        'Happy',
        'Hearts',
        'RoboCop',
        'Round',
        'RoundFrame01',
        'RoundFrame02',
        'Sensor',
        'Shades',
      ],
      description: 'The style of the bots eyes',
    },
    mouthType: {
      control: { type: 'select' },
      options: [
        'Arturito',
        'Bite',
        'Diagram',
        'Grill01',
        'Grill02',
        'Grill03',
        'RoboCop',
        'Smile01',
        'Smile02',
        'Square01',
        'Square02',
      ],
      description: 'The style of the bots mouth',
    },
    sideType: {
      control: { type: 'select' },
      options: [
        'Antenna01',
        'Antenna02',
        'Cables01',
        'Cables02',
        'Round',
        'Square',
        'SquareAsymmetric',
      ],
      description: 'The side accessories of the bot',
    },
    faceColor: {
      control: { type: 'select' },
      options: [
        'Blue01',
        'Blue02',
        'Blue03',
        'BlueGrey01',
        'BlueGrey02',
        'BlueGrey03',
        'BlueGrey300',
        'BlueGrey500',
        'Orange01',
        'Orange02',
        'Orange03',
        'Red01',
        'Red02',
        'Red03',
        'Yellow01',
        'Yellow02',
        'Yellow03',
      ],
      description: 'Color of the face',
    },
    sidesColor: {
      control: { type: 'select' },
      options: [
        'Blue01',
        'Blue02',
        'Blue03',
        'BlueGrey01',
        'BlueGrey02',
        'BlueGrey03',
        'BlueGrey300',
        'BlueGrey500',
        'Orange01',
        'Orange02',
        'Orange03',
        'Red01',
        'Red02',
        'Red03',
        'Yellow01',
        'Yellow02',
        'Yellow03',
      ],
      description: 'Color of the side accessories',
    },
    textureType: {
      control: { type: 'select' },
      options: [
        'None',
        'Circuits',
        'Dots',
        'Dirty01',
        'Dirty02',
        'Camo01',
        'Camo02',
        'Grunge01',
        'Grunge02',
      ],
      description: 'The texture overlay for the bot face',
    },
    size: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
      description: 'Size of the bot in pixels',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    botStyle: 'Circle',
    circleColor: 'BlueGrey300',
    topType: 'Bulb02',
    topColor: 'BlueGrey500',
    faceType: 'Square01',
    faceColor: 'BlueGrey500',
    textureType: 'None',
    eyeType: 'Round',
    mouthType: 'Square01',
    sideType: 'Square',
    sidesColor: 'BlueGrey500',
    size: 240,
  },
}

export const Happy: Story = {
  args: {
    ...Default.args,
    eyeType: 'Happy',
    mouthType: 'Smile01',
    topType: 'GlowingBulb01',
    circleColor: 'Yellow01',
  },
}

export const Serious: Story = {
  args: {
    ...Default.args,
    eyeType: 'Shades',
    mouthType: 'Grill01',
    topType: 'Antenna',
    faceType: 'Square02',
    circleColor: 'BlueGrey03',
  },
}

export const Retro: Story = {
  args: {
    ...Default.args,
    eyeType: 'RoboCop',
    mouthType: 'RoboCop',
    faceType: 'RoboCop',
    topType: 'Radar',
    sideType: 'Antenna01',
    circleColor: 'Blue01',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 120,
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 400,
  },
}

export const Transparent: Story = {
  args: {
    ...Default.args,
    botStyle: 'Transparent',
  },
}
