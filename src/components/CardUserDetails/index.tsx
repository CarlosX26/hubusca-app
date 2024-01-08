import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import { Icons } from "../Icons"
import { Avatar, BoxTexts, ButtonClose, CardUserDetailsWrapper } from "./styles"

interface ICardUserDetailsProps {
  closeCard(): void
}

export const CardUserDetails = ({ closeCard }: ICardUserDetailsProps) => {
  const { currentUser } = useGithubContext()

  return (
    <CardUserDetailsWrapper
      animation={{
        from: {
          opacity: 0,
          height: "0%",
        },
        to: {
          opacity: 1,
          height: "100%",
        },
        easing: "ease-in-out",
      }}
      duration={500}
    >
      <ButtonClose onPress={closeCard}>
        <Icons.Close size={32} color="#000" />
      </ButtonClose>

      <Avatar source={{ uri: currentUser?.avatar_url }} />

      <BoxTexts>
        <TextRegular>#ID{currentUser?.id}</TextRegular>
        <TextRegular>Seguidores: {currentUser?.followers}</TextRegular>
        <TextRegular>{currentUser?.name}</TextRegular>
        <TextRegular>{currentUser?.login}</TextRegular>
        {currentUser && <TextRegular>{currentUser.location}</TextRegular>}
        <TextRegular>
          Repositórios públicos: {currentUser?.public_repos}
        </TextRegular>
      </BoxTexts>
    </CardUserDetailsWrapper>
  )
}
