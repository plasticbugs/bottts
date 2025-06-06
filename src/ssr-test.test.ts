import { describe, it, expect } from 'vitest'
import { validateSSRCompatibility } from './ssr-test'

describe('SSR Compatibility', () => {
  it('should render Bot component in server environment', () => {
    const result = validateSSRCompatibility()

    expect(result.bot.success).toBe(true)
    expect(result.bot.html).toContain('<svg')
    expect(result.bot.html).toContain('Bot Avatar')
    expect(result.bot.length).toBeGreaterThan(100)
  })

  it('should render Piece component in server environment', () => {
    const result = validateSSRCompatibility()

    expect(result.piece.success).toBe(true)
    expect(result.piece.html).toContain('<svg')
    expect(result.piece.length).toBeGreaterThan(50)
  })

  it('should pass all SSR compatibility tests', () => {
    const result = validateSSRCompatibility()

    expect(result.allPass).toBe(true)
  })
})
