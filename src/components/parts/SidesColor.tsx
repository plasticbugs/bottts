import { ReactNode } from 'react'
import { useBotContext } from '../../context/BotContext'
import { CircleColor } from './CircleColor'
import type { SidesColor as SidesColorType } from '../../types'

interface SidesColorProps {
  maskID: string
  children: ReactNode
}

export function SidesColor({ maskID, children }: SidesColorProps) {
  const { sidesColor = 'BlueGrey500' } = useBotContext()

  return (
    <CircleColor maskID={maskID} color={sidesColor as SidesColorType}>
      {children}
    </CircleColor>
  )
}
