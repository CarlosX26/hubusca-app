import { LocalSvg } from "react-native-svg"

interface IHomeProps {
  color: string
  size: number
}

export const History = ({ size, color }: IHomeProps) => (
  <LocalSvg
    asset={require("../../../../assets/history_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
