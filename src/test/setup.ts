import { beforeAll, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Setup for testing
beforeAll(() => {
  // Any global setup
})

// Cleanup after each test
afterEach(() => {
  cleanup()
})
