import { useEffect } from "react"
import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import { Icons } from "../Icons"
import {
  Avatar,
  BoxTexts,
  ButtonClose,
  CardRepository,
  CardUserDetailsWrapper,
} from "./styles"
import { FlatList } from "react-native"
import { IRepository } from "../../contexts/types"
import { Linking } from "react-native"

interface ICardUserDetailsProps {
  closeCard(): void
}

export const CardUserDetails = ({ closeCard }: ICardUserDetailsProps) => {
  const { currentUser, repositories, getRepositories } = useGithubContext()

  useEffect(() => {
    getRepositories()
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }

  const handleLinkPress = async (url: string) => {
    const isSupported = await Linking.canOpenURL(url)

    if (isSupported) {
      await Linking.openURL(url)
    } else {
      console.error(`Não foi possível abrir o link: ${url}`)
    }
  }

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

      <FlatList
        style={{ marginTop: 16, marginBottom: 32, width: "100%" }}
        data={repositories}
        renderItem={({ item }: { item: IRepository }) => (
          <CardRepository onPress={() => handleLinkPress(item.html_url)}>
            <TextRegular>{item.name}</TextRegular>
            <TextRegular>Linguagem: {item.language}</TextRegular>
            {item.description && <TextRegular>{item.description}</TextRegular>}
            <TextRegular>criado em: {formatDate(item.created_at)}</TextRegular>
            <TextRegular>
              última atualização: {formatDate(item.pushed_at)}
            </TextRegular>
          </CardRepository>
        )}
        keyExtractor={(item) => item.name}
      />
    </CardUserDetailsWrapper>
  )
}
