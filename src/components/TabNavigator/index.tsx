import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../../screens/Home"
import { Icons } from "../Icons"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
        tabBarActiveTintColor: "#633EBB",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icons.Home color={color} size={size} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
