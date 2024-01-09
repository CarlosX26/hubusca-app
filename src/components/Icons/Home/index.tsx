import { LocalSvg } from "react-native-svg"
import { IIconsProps } from ".."

export const Home = ({ size, color }: IIconsProps) => (
  <LocalSvg
    asset={require("../../../../assets/home_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
