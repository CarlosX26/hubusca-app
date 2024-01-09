import { FlatList } from "react-native"
import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import {
  BoxInfo,
  CardSearchedAvatar,
  CardSearchedUser,
  HistoryWrapper,
} from "./styles"
import { useState } from "react"
import { CardUserDetails } from "../../components/CardUserDetails"

export const History = () => {
  const [showCard, setShowCard] = useState(false)
  const { profileHistory, toggleCurrentUser } = useGithubContext()

  const closeCard = () => {
    setShowCard(false)
  }

  return (
    <>
      <HistoryWrapper>
        <TextRegular fontSize={32}>Buscas recentes</TextRegular>

        <FlatList
          style={{ marginTop: 32 }}
          data={profileHistory}
          renderItem={({ item }) => (
            <CardSearchedUser
              onPress={() => {
                setShowCard(true)
                toggleCurrentUser(item)
              }}
            >
              <CardSearchedAvatar source={{ uri: item.avatar_url }} />

              <BoxInfo>
                <TextRegular fontSize={20}>{item.name}</TextRegular>
                <TextRegular fontSize={20}>{item.login}</TextRegular>
                {item.location && (
                  <TextRegular fontSize={20}>{item.location}</TextRegular>
                )}
              </BoxInfo>
            </CardSearchedUser>
          )}
          keyExtractor={(item) => item.login}
        />
      </HistoryWrapper>
      {showCard && <CardUserDetails closeCard={closeCard} />}
    </>
  )
}
