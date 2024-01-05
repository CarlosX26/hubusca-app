import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import { Avatar, LinkMoreInfo, CardWrapper } from "./styles"

export const CardUser = () => {
  const { userProfile } = useGithubContext()

  return (
    <CardWrapper>
      <Avatar source={{ uri: userProfile?.avatar_url }} />

      <TextRegular>{userProfile?.name}</TextRegular>
      <TextRegular>{userProfile?.login}</TextRegular>
      {/* <TextRegular>Santa Inês/Ma</TextRegular> */}

      <LinkMoreInfo>{"mais info >"}</LinkMoreInfo>
    </CardWrapper>
  )
}
