import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Logup from "./logup";
import TabBar from "./tabar";
import Cart from "./cart";
import Detail from "./detail";
import EditProfileScreen from "./editprofile";
import Regular from './regular'
import AdminHome from "./adminhome";
import AddProductScreen from "./add/addproduct";
import CategoryManager from "./add/addcategory";

const Stack = createStackNavigator()
export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Logup" component={Logup}></Stack.Screen>
        <Stack.Screen name="AdminHome" component={AdminHome}></Stack.Screen>
        <Stack.Screen name="TabBar" component={TabBar}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
        <Stack.Screen name="Regular" component={Regular}></Stack.Screen>
        <Stack.Screen name="AddProductScreen" component={AddProductScreen}></Stack.Screen>
        <Stack.Screen name="CategoryManager" component={CategoryManager}></Stack.Screen>
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}></Stack.Screen>
        {/* <Stack.Screen name="Test" component={Test}></Stack.Screen> */}
    </Stack.Navigator>
  );
}
