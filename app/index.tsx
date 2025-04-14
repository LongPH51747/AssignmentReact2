import { StyleSheet, View } from "react-native";
import Login from "./login";
import Logup from "./logup";
import Home from "./home";
import Search from "./search";
import Infor from "./infor";
import Detail from "./detail";
import Cart from "./cart";
import Main from "./main";
import { Provider } from "react-redux";
import PlantStore from "@/redux/store/plantstore";

export default function Index() {
  return (
    <Provider store={PlantStore}>
      <Main></Main>
    </Provider>
  );
}

const styles = StyleSheet.create({});
