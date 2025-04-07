import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Logup from "./logup";
import TabBar from "./tabar";
import Cart from "./cart";
import Detail from "./detail";
import EditProfileScreen from "./editprofile";

const Stack = createStackNavigator()
export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Logup" component={Logup}></Stack.Screen>
        <Stack.Screen name="TabBar" component={TabBar}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}></Stack.Screen>

    </Stack.Navigator>
  );
}
