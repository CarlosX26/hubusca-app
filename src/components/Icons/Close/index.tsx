import { LocalSvg } from "react-native-svg"
import { IIconsProps } from ".."

export const Close = ({ size, color }: IIconsProps) => (
  <LocalSvg
    asset={require("../../../../assets/close_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
