import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from 'react'
import type { BotOptions } from '../types'

interface BotContextValue extends BotOptions {
  updateOptions: (updates: Partial<BotOptions>) => void
  resetOptions: () => void
}

const defaultOptions: BotOptions = {
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
}

const BotContext = createContext<BotContextValue | null>(null)

export interface BotProviderProps {
  children: ReactNode
  initialOptions?: Partial<BotOptions>
}

export function BotProvider({
  children,
  initialOptions = {},
}: BotProviderProps) {
  const [options, setOptions] = useState<BotOptions>({
    ...defaultOptions,
    ...initialOptions,
  })

  // Update options when initialOptions change (for Storybook controls)
  useEffect(() => {
    setOptions({
      ...defaultOptions,
      ...initialOptions,
    })
  }, [initialOptions])

  const updateOptions = useCallback((updates: Partial<BotOptions>) => {
    setOptions(prev => ({ ...prev, ...updates }))
  }, [])

  const resetOptions = useCallback(() => {
    setOptions(defaultOptions)
  }, [])

  const value: BotContextValue = {
    ...options,
    updateOptions,
    resetOptions,
  }

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>
}

export function useBotContext(): BotContextValue {
  const context = useContext(BotContext)
  if (!context) {
    throw new Error('useBotContext must be used within a BotProvider')
  }
  return context
}

export { BotContext }
