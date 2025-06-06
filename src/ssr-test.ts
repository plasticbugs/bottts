/**
 * SSR/SSG Compatibility Test
 *
 * This file tests that our components can be safely rendered
 * in a server-side environment without any browser-specific APIs.
 */

import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { Bot, Piece } from './index'

// Test basic Bot rendering in SSR
export function testBotSSR() {
  const botElement = createElement(Bot, {
    botStyle: 'Circle',
    faceType: 'Square01',
    eyeType: 'Round',
    mouthType: 'Square01',
    sideType: 'Square',
    size: 200,
  })

  try {
    const html = renderToString(botElement)
    return {
      success: true,
      html,
      length: html.length,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test Piece rendering in SSR
export function testPieceSSR() {
  const pieceElement = createElement(Piece, {
    pieceType: 'face',
    botStyle: 'Circle',
    faceType: 'Square01',
    faceColor: 'BlueGrey500',
    pieceSize: 100,
  })

  try {
    const html = renderToString(pieceElement)
    return {
      success: true,
      html,
      length: html.length,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Validate that components work in Node.js environment
export function validateSSRCompatibility() {
  const botTest = testBotSSR()
  const pieceTest = testPieceSSR()

  return {
    bot: botTest,
    piece: pieceTest,
    allPass: botTest.success && pieceTest.success,
  }
}
