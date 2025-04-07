import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./customcomponent/header";
import { useState } from "react";

export default function Detail() {
  const [count, setCount] = useState(0);
  const color = (color: string): TextStyle => ({
    color: color,
  });
  const size = (size: number): TextStyle => ({
    fontSize: size,
  });

  return (
    <View>
      <Header
        back={require("../img/chevron-left.png")}
        icon={require("../img/shopping-cart.png")}
        title={"Spider Plant"}
      ></Header>
      <Image style={styles.img} source={require("../img/caytrong.png")}></Image>
      <View style={{width: 330, alignSelf: 'center'}}>
        <View style={[styles.row, { width: 160}]}>
          <Text style={[styles.withborder, color("rgba(255, 255, 255, 1)")]}>
            Cây trồng
          </Text>
          <Text style={[styles.withborder, color("rgba(255, 255, 255, 1)")]}>
            Ưu bóng
          </Text>
        </View>

        <Text
          style={[color("rgba(0, 117, 55, 1)"), size(25), { marginVertical: 20 }]}
        >
          250.000đ
        </Text>

        <View>
          <Text style={[size(18)]}>Chi tiết sản phẩm</Text>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Kích cỡ</Text>
            <Text>Nhỏ</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Xuất xứ</Text>
            <Text>Châu phi</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Tình trạng</Text>
            <Text style={[color('rgba(0, 117, 55, 1)')]}>Còn 156 sp</Text>
          </View>
          <View style={styles.hr}></View>
        </View>
      </View>

        <View style={[styles.row,{width: 350, alignSelf: 'center', marginTop: 20}]}>
          <Text>Đã chọn {count} sản phẩm</Text>
          <Text>Tạm tính</Text>
        </View>

        <View style={[styles.row,{width: 350, alignSelf: 'center'}]}>
          <View style={[styles.row, { width: 130 }]}>
            <TouchableOpacity
              style={[styles.border]}
              onPress={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              <Text style={[size(15)]}>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              style={[styles.border]}
              onPress={() => {
                setCount(count + 1);
              }}
            >
              <Text style={[size(15)]}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[size(25)]}>0đ</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            alignSelf: "center",
            backgroundColor: "rgba(0, 117, 55, 1)",
            height: 50,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={[color("white"), size(20)]}>Chọn mua</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 270,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  border: {
    borderColor: "rgba(0, 0, 0, 1)",
    width: 23,
    height: 23,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  withborder: {
    backgroundColor: "rgba(0, 146, 69, 1)",
    width: 75,
    height: 28,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
  },
  hr: {
    borderColor: 'rgba(34, 31, 31, 1)',
    width: "100%",
    borderWidth: 0.5,
    marginBottom: 20
  }
});
