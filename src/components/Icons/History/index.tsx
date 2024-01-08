import { LocalSvg } from "react-native-svg"
import { IIconsProps } from ".."

export const History = ({ size, color }: IIconsProps) => (
  <LocalSvg
    asset={require("../../../../assets/history_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
