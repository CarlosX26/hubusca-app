import { ThemeProvider } from "styled-components/native"
import { Home } from "./src/screens/Home"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import light from "./src/theme/light"

const App = () => {
  const [fontsLoaded] = useFonts({
    "Jua-Regular": require("./assets/fonts/Jua-Regular.ttf"),
  })

  console.log(fontsLoaded)
  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar />
      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
