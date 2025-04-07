import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TextStyle,
  Text,
} from "react-native";
import WrapTextInput from "./customcomponent/wrapinput";
import Title from "./customcomponent/title";
import ButtonForm from "./customcomponent/form";

const Login = ({navigation}:{navigation: any}) => {
  const [emaiorsdt, setEmaiOrSdt] = useState("");
  const [passowrd, setPassword] = useState("");
  const color = (color: string): TextStyle => ({
    color: color,
  });
  const size = (size: number): TextStyle => ({
    fontSize: size,
  });
  return (
    <View style={styles.container}>
      {/* Hình ảnh nền */}
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"default"}
      ></StatusBar>
      <Image
        source={require("../img/imagelogin.png")} // Đổi URL ảnh
        style={styles.image}
      />
      <Title title={"Chào mừng bạn"} subtitle={"Đăng nhập tài khoản"}></Title>
      <WrapTextInput
        placeholder={"Nhập email hoặc số điện thoại"}
        onchangeText={setEmaiOrSdt}
        value={emaiorsdt}
        icon={''}
      ></WrapTextInput>
      <WrapTextInput
        placeholder={"Nhập password"}
        onchangeText={setPassword}
        value={passowrd}
        icon={''}
      ></WrapTextInput>
      <View style={[styles.row,styles.wraptext]}>
        <View style={styles.row}>
          <Image source={require("../img/ri_checkbox-circle-line.png")}></Image>
          <Text style={[color("rgba(148, 144, 144, 1)")]}>
            Nhớ tài khoản
          </Text>
        </View>
        <Text style={[color('rgba(0, 146, 69, 1)')]}>Forgot Password?</Text>
      </View>
      <ButtonForm onPress={()=>navigation.navigate('TabBar')} onPressRegister={()=>navigation.navigate('Logup')} title={'Đăng nhập'} text={"Bạn không có tài khoản"} subtitle={"Tạo tài khoản"}></ButtonForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
    marginTop: -50,
  },
  svg: {
    position: "absolute",
    bottom: -10, // Để khớp với ảnh
  },
  row:{
    flexDirection: "row",
    alignItems: 'center'
  },
  wraptext:{
    justifyContent: 'space-between',
    width: 330,
    alignSelf: 'center',
    marginVertical: 15
  }
});

export default Login;
