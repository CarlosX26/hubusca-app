import {
  ButtonClearSearch,
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
import { CardUserDetails } from "../../components/CardUserDetails"

export const Home = () => {
  const [showField, setShowField] = useState(false)
  const [username, setUsername] = useState("")
  const [showCard, setShowCard] = useState(false)

  const {
    getProfile,
    userProfile,
    clearSearch,
    loadingProfile,
    userIsNotfound,
  } = useGithubContext()

  const hiddenInputSearch = () => {
    if (!Boolean(username.trim())) {
      setShowField(false)
      clearSearch()
    }
  }

  const closeCard = () => {
    setShowCard(false)
  }

  const openCard = () => {
    setShowCard(true)
  }

  return (
    <>
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
              <Icons.Search size={32} color="#FFF" />
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
              value={username}
            />

            <ButtonClearSearch
              onPress={() => {
                clearSearch()
                setUsername("")
                setShowField(false)
              }}
            >
              <Icons.Close size={32} color="#FFF" />
            </ButtonClearSearch>
            <ButtonSearchInput onPress={() => getProfile(username)}>
              <Icons.Search size={32} color="#FFF" />
            </ButtonSearchInput>
          </InputWrapper>
        )}

        {!userProfile && !loadingProfile && (
          <TextInfo>* Pesquise por usuários do Github</TextInfo>
        )}
        {loadingProfile && <TextInfo>Buscando usuário... 🔎</TextInfo>}
        {userIsNotfound && <TextInfo>Nenhum usuário encontrado!</TextInfo>}
        {userProfile && <CardUser openCard={openCard} />}
      </HomeWrapper>

      {showCard && <CardUserDetails closeCard={closeCard} />}
    </>
  )
}
