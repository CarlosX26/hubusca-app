import { TextRegular } from "../../theme/typography"
import { Avatar, LinkMoreInfo, CardWrapper } from "./styles"

export const CardUser = () => {
  return (
    <CardWrapper>
      <Avatar source={require("../../../assets/profile_example.jpg")} />

      <TextRegular>Doguinho024</TextRegular>
      <TextRegular>Doguinho024 Login</TextRegular>
      <TextRegular>Santa Inês/Ma</TextRegular>

      <LinkMoreInfo>{"mais info >"}</LinkMoreInfo>
    </CardWrapper>
  )
}
