import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/index";
import { Ionicons } from "@expo/vector-icons";
import Passwords from "./pages/password/index";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return (
              <Ionicons size={size} color={color} name="lock-closed-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
