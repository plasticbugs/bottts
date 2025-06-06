import { ReactNode } from 'react'
import type { CircleColor as CircleColorType } from '../../types'

interface CircleColorProps {
  maskID: string
  color?: CircleColorType
  children: ReactNode
}

const colorMap: Record<CircleColorType, string> = {
  Blue01: '#2196F3',
  Blue02: '#03A9F4',
  Blue03: '#3F51B5',
  BlueGrey01: '#607D8B',
  BlueGrey02: '#9E9E9E',
  BlueGrey03: '#424242',
  BlueGrey300: '#90A4AE',
  BlueGrey500: '#607D8B',
  Orange01: '#FF9800',
  Orange02: '#FF5722',
  Orange03: '#FFC107',
  Red01: '#F44336',
  Red02: '#E91E63',
  Red03: '#9C27B0',
  Yellow01: '#FFEB3B',
  Yellow02: '#CDDC39',
  Yellow03: '#8BC34A',
}

export function CircleColor({
  maskID,
  color = 'BlueGrey300',
  children,
}: CircleColorProps) {
  const fillColor = colorMap[color] || colorMap.BlueGrey300

  return (
    <g id={`CircleColor-${color}`} mask={`url(#${maskID})`} fill={fillColor}>
      {children}
    </g>
  )
}
