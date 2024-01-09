import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import { Avatar, LinkMoreInfo, CardWrapper } from "./styles"

interface ICardUserProps {
  openCard(): void
}

export const CardUser = ({ openCard }: ICardUserProps) => {
  const { userProfile, toggleCurrentUser } = useGithubContext()

  return (
    <CardWrapper
      onPress={() => {
        toggleCurrentUser(userProfile!)
        openCard()
      }}
    >
      <Avatar source={{ uri: userProfile?.avatar_url }} />

      <TextRegular>{userProfile?.name}</TextRegular>
      <TextRegular>{userProfile?.login}</TextRegular>
      {userProfile?.location && (
        <TextRegular>{userProfile.location}</TextRegular>
      )}

      <LinkMoreInfo>{"mais info >"}</LinkMoreInfo>
    </CardWrapper>
  )
}
