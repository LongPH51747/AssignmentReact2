import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import {Checkbox} from 'react-native-paper'

export default function ListItemCart() {
  const [count, setCount] = useState(0);
  const color = (color: string): TextStyle => ({
    color: color,
  });
  const size = (size: number): TextStyle => ({
    fontSize: size,
  });
  const [check, setCheck] = useState(false)
  return (
    <View style={styles.container}>
        <Checkbox status={check?'checked':'unchecked'} onPress={()=>setCheck(!check)}></Checkbox>
      <Image
        style={styles.img}
        source={require("../../img/caytrong.png")}
      ></Image>
      <View>
        <Text>
          Spider Plant | <Text style={[color('rgba(125, 123, 123, 1)')]}>Ưa bóng</Text>
        </Text>
        <Text style={[size(16), color("rgba(0, 117, 55, 1)")]}>250.000đ</Text>

        <View style={[styles.row,{marginTop: 20}]}>
          <View style={[styles.row, { width: 100 }]}>
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
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline", marginLeft: 30 }}>Xoá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    height: 107,
    width: 380
  },
  img: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 8,
    margin: 20
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
    borderColor: "rgba(34, 31, 31, 1)",
    width: "100%",
    borderWidth: 0.5,
    marginBottom: 20,
  },
});
