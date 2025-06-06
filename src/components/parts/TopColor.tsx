import { ReactNode } from 'react'
import { useBotContext } from '../../context/BotContext'
import { CircleColor } from './CircleColor'
import type { TopColor as TopColorType } from '../../types'

interface TopColorProps {
  maskID: string
  children: ReactNode
}

export function TopColor({ maskID, children }: TopColorProps) {
  const { topColor = 'BlueGrey500' } = useBotContext()

  return (
    <CircleColor maskID={maskID} color={topColor as TopColorType}>
      {children}
    </CircleColor>
  )
}
