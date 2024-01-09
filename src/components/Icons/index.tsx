import { Close } from "./Close"
import { History } from "./History"
import { Home } from "./Home"
import { Search } from "./Search"

export interface IIconsProps {
  color: string
  size: number
}

export const Icons = {
  Search: Search,
  Home: Home,
  History: History,
  Close: Close,
}
