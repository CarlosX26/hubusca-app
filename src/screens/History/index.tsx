import { TextRegular } from "../../theme/typography"
import {
  BoxInfo,
  CardSearchedAvatar,
  CardSearchedUser,
  HistoryWrapper,
  ListSearchedUsers,
} from "./styles"

export const History = () => {
  const data: {
    id: number
    username: string
    userlogin: string
    location: string
  }[] = [
    {
      id: 0,
      username: "Doguinho",
      userlogin: "Doguinho login",
      location: "Santa Inês/MA",
    },
  ]

  return (
    <HistoryWrapper>
      <TextRegular fontSize={32}>Buscas recentes</TextRegular>

      {/* <CardSearchedUser>
        <CardSearchedAvatar
          source={require("../../../assets/profile_example.jpg")}
        />

        <BoxInfo>
          <TextRegular fontSize={20}>Doguinho</TextRegular>
          <TextRegular fontSize={20}>Doguinho</TextRegular>
          <TextRegular fontSize={20}>Doguinho</TextRegular>
        </BoxInfo>
      </CardSearchedUser> */}
      {/* <ListSearchedUsers
        data={data}
        renderItem={({ item }) => <CardSearchedUser key={}/>}
        // keyExtractor={(item) => item.id}
      /> */}
    </HistoryWrapper>
  )
}
