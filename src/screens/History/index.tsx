import { FlatList } from "react-native"
import { useGithubContext } from "../../contexts/github"
import { TextRegular } from "../../theme/typography"
import {
  BoxInfo,
  CardSearchedAvatar,
  CardSearchedUser,
  HistoryWrapper,
} from "./styles"

export const History = () => {
  const { profileHistory } = useGithubContext()

  return (
    <HistoryWrapper>
      <TextRegular fontSize={32}>Buscas recentes</TextRegular>

      <FlatList
        style={{ marginTop: 32 }}
        data={profileHistory}
        renderItem={({ item }) => (
          <CardSearchedUser>
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
  )
}
