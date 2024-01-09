import { LocalSvg } from "react-native-svg"
import { IIconsProps } from ".."

export const Search = ({ size, color }: IIconsProps) => (
  <LocalSvg
    asset={require("../../../../assets/search_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
