import { LocalSvg } from "react-native-svg"

interface IHomeProps {
  color: string
  size: number
}

export const Home = ({ size, color }: IHomeProps) => (
  <LocalSvg
    asset={require("../../../../assets/home_icon.svg")}
    fill={color}
    width={size}
    height={size}
  />
)
