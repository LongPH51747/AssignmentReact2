import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./customcomponent/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/redux/action/categoryaction";

export default function Detail({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const data = route.params;
  console.log("data detail", data);
  const [cate, setCate] = useState<string>("");
  const [count, setCount] = useState(0);
  const color = (color: string): TextStyle => ({
    color: color,
  });
  const size = (size: number): TextStyle => ({
    fontSize: size,
  });

  const getCategory = async (id: string): Promise<string> => {
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      return res.data?.value ?? "Không xác định";
    } catch (error) {
      console.log(error);
      return "Lỗi tải";
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const name = await getCategory(data.category);
      setCate(name);
    };
    fetchCategory();
  }, [data.category]);

  return (
    <View style={{ height: "100%", backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <Header
        back={require("../img/chevron-left.png")}
        icon={require("../img/shopping-cart.png")}
        title={"Spider Plant"}
        onPressCart={""}
        onBack={()=>navigation.goBack()}
      ></Header>
      <Image resizeMode="contain" style={styles.img} source={{ uri: data.image }}></Image>
      <View style={{ width: 330, alignSelf: "center" }}>
        <View style={[styles.row, { width: 160 }]}>
          <Text style={[styles.withborder, color("rgba(255, 255, 255, 1)")]}>
            {cate}
          </Text>
          {data.attribute && (
            <>
              <Text
                style={[styles.withborder, color("rgba(255, 255, 255, 1)")]}
              >
                {data.attribute}
              </Text>
            </>
          )}
        </View>

        <Text
          style={[
            color("rgba(0, 117, 55, 1)"),
            size(25),
            { marginVertical: 20 },
          ]}
        >
          {data.price}đ
        </Text>

        <View>
          <Text style={[size(18)]}>Chi tiết sản phẩm</Text>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Kích cỡ</Text>
            <Text>{data.size}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Xuất xứ</Text>
            <Text>{data.origin}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={[styles.row]}>
            <Text>Tình trạng</Text>
            <Text style={[color("rgba(0, 117, 55, 1)")]}>
              Còn {data.quantity} sp
            </Text>
          </View>
          <View style={styles.hr}></View>
        </View>
      </View>

      <View
        style={[styles.row, { width: 350, alignSelf: "center", marginTop: 20 }]}
      >
        <Text>Đã chọn {count} sản phẩm</Text>
        <Text>Tạm tính</Text>
      </View>

      <View style={[styles.row, { width: 350, alignSelf: "center" }]}>
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
          <Text style={[size(25)]}>{data.price * count}đ</Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={count == 0}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 350,
          alignSelf: "center",
          backgroundColor:
            count == 0 ? "rgba(171, 171, 171, 1)" : "rgba(0, 117, 55, 1)",
          height: 50,
          borderRadius: 10,
          marginTop: 20,
          position: "absolute",
          bottom: 50,
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
    backgroundColor: "rgba(246, 246, 246, 1)",
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
