import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Bot } from './Bot'

describe('Bot', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Bot
        botStyle="Circle"
        circleColor="BlueGrey300"
        topType="Bulb02"
        faceType="Square01"
        eyeType="Round"
        mouthType="Square01"
        sideType="Square"
      />
    )

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with correct size', () => {
    const { container } = render(
      <Bot
        botStyle="Circle"
        size={300}
        faceType="Square01"
        eyeType="Round"
        mouthType="Square01"
        sideType="Square"
      />
    )

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '300px')
    expect(svg).toHaveAttribute('height', '300px')
  })

  it('applies custom className', () => {
    const { container } = render(
      <Bot
        botStyle="Circle"
        className="custom-bot"
        faceType="Square01"
        eyeType="Round"
        mouthType="Square01"
        sideType="Square"
      />
    )

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom-bot')
  })
})
