import { ReactNode } from 'react'
import { useBotContext } from '../../context/BotContext'
import { CircleColor } from './CircleColor'
import type { FaceColor as FaceColorType } from '../../types'

interface FaceColorProps {
  maskID: string
  children: ReactNode
}

export function FaceColor({ maskID, children }: FaceColorProps) {
  const { faceColor = 'BlueGrey500' } = useBotContext()

  return (
    <CircleColor maskID={maskID} color={faceColor as FaceColorType}>
      {children}
    </CircleColor>
  )
}
