import {
  ButtonSearch,
  ButtonSearchInput,
  HomeWrapper,
  InputSearch,
  InputWrapper,
  TextInfo,
} from "./styles"
import { Logo } from "../../components/Logo"
import { useState } from "react"
import { Icons } from "../../components/Icons"
import { CardUser } from "../../components/CardUser"
import * as Animatable from "react-native-animatable"
import { useGithubContext } from "../../contexts/github"

export const Home = () => {
  const [showField, setShowField] = useState(false)
  const [username, setUsername] = useState("")

  const { getProfile, userProfile, clearSearch } = useGithubContext()

  const hiddenInputSearch = () => {
    if (!Boolean(username.trim())) {
      setShowField(false)
      clearSearch()
    }
  }

  return (
    <HomeWrapper>
      <Logo />
      {!showField && (
        <Animatable.View
          animation={{
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
            easing: "ease-out",
          }}
          duration={500}
        >
          <ButtonSearch onPress={() => setShowField(true)}>
            <Icons.Search size={32} />
          </ButtonSearch>
        </Animatable.View>
      )}

      {showField && (
        <InputWrapper
          animation={{
            from: {
              opacity: 0,
              width: "10%",
            },
            to: {
              opacity: 1,
              width: "90%",
            },
            easing: "ease-in-out",
          }}
          duration={500}
        >
          <InputSearch
            placeholder="Nome de usuário"
            placeholderTextColor="#FFF"
            onBlur={hiddenInputSearch}
            onChangeText={setUsername}
          />
          <ButtonSearchInput onPress={() => getProfile(username)}>
            <Icons.Search size={32} />
          </ButtonSearchInput>
        </InputWrapper>
      )}

      {!userProfile && <TextInfo>* Pesquise por usuários do Github</TextInfo>}

      {userProfile && <CardUser />}
    </HomeWrapper>
  )
}
