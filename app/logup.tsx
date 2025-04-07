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
import Header from "./customcomponent/header";
import SectionView from "./customcomponent/sectionview";

const Logup = ({navigation}:{navigation: any}) => {
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
      <Title title={"Đăng ký"} subtitle={"Tạo tài khoản"}></Title>
      <WrapTextInput
        placeholder={"Email"}
        onchangeText={setEmaiOrSdt}
        value={emaiorsdt}
        icon={''}
      ></WrapTextInput>
      <WrapTextInput
        placeholder={"Họ tên"}
        onchangeText={setEmaiOrSdt}
        value={emaiorsdt}
        icon={''}
      ></WrapTextInput>
      <WrapTextInput
        placeholder={"Số điện thoại"}
        onchangeText={setPassword}
        value={passowrd}
        icon={''}
      ></WrapTextInput>
      <WrapTextInput
        placeholder={"Nhập password"}
        onchangeText={setPassword}
        value={passowrd}
        icon={''}
      ></WrapTextInput>
      {/* <WrapTextInput
        placeholder={"Nhập lại password"}
        onchangeText={setPassword}
        value={passowrd}
      ></WrapTextInput> */}
      <Text style={[color("rgba(0, 0, 0, 1)"), {width: 250, marginVertical: 20, alignSelf: 'center',textAlign: 'center'}]}>
        Để đăng ký tài khoản, bạn đồng ý 
        <Text style={[color("rgba(0, 146, 69, 1)")]}>
        {" "}Terms & Conditions {' '}
        </Text>
        and 
        <Text style={[color("rgba(0, 146, 69, 1)")]}>
        {" "}Privacy Policy{' '}
        </Text>
      </Text>
      <ButtonForm
      onPress={()=>navigation.navigate('Login')}
      onPressRegister={()=>navigation.navigate('Login')}
        title={"Đăng ký"}
        text={"Tôi đã có tài khoản"}
        subtitle={"Đăng nhập"}
      ></ButtonForm>
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
    marginTop: -150,
  },
  svg: {
    position: "absolute",
    bottom: -10, // Để khớp với ảnh
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  wraptext: {
    justifyContent: "space-between",
    width: 330,
    alignSelf: "center",
    marginVertical: 15,
  },
});

export default Logup;
