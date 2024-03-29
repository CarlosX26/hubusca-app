import { ThemeProvider } from "styled-components/native"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { TabNavigator } from "./src/components/TabNavigator"
import theme from "./src/theme/theme"
import { GithubProvider } from "./src/contexts/github"

const App = () => {
  const [fontsLoaded] = useFonts({
    "Jua-Regular": require("./assets/fonts/Jua-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GithubProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <ThemeProvider theme={theme}>
          <TabNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </GithubProvider>
  )
}

export default App
