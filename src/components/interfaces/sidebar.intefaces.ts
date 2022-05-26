import { SvgIconProps } from '@mui/material'

export interface PropsItem {
  Icon: (props: SvgIconProps) => JSX.Element
  text: string
  path: string
}
