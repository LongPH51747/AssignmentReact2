import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Search from "./search";
import Infor from "./infor";
import Profile from "./profile";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
export default function TabBar() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Infor") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName as keyof typeof Ionicons.glyphMap}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false, // Hiện tiêu đề
          tabBarInactiveBackgroundColor: "rgba(255, 255, 255, 1)",
          tabBarActiveBackgroundColor: "rgba(0, 117, 55, 1)",
        })}
      >
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Search" component={Search}></Tab.Screen>
        <Tab.Screen name="Infor" component={Infor}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>
  );
}
