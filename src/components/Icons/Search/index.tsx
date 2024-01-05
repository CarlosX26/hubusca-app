import { LocalSvg } from "react-native-svg"

interface ISearchProps {
  size: number
}

export const Search = ({ size }: ISearchProps) => (
  <LocalSvg
    asset={require("../../../../assets/search_icon.svg")}
    fill="#FFF"
    width={size}
    height={size}
  />
)
