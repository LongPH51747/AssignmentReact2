import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { Category, getCategory } from "@/redux/action/categoryaction";
import { AppDispatch } from "@/redux/store/plantstore";
import {
  addPlantAction,
  Plant,
  updatePlantAction,
} from "@/redux/action/plantaction";
import Header from "../customcomponent/header";
// import { addProduct } from "@/redux/action/productaction"; // <-- Bạn cần tạo action này

export default function AddProductScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const categories: Category[] = useSelector(
    (state: any) => state.category.listCategory
  );

  const handleAddPlant = (plant: Plant) => {
    try {
      dispatch(addPlantAction(plant));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePlant = (plant: Plant) => {
    try {
      dispatch(updatePlantAction(plant, data.id));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const [product, setProduct] = useState<Plant>({
    name: " ",
    image: " ",
    category: " ",
    price: 0.0,
    attribute: " ",
    origin: " ",
    size: "",
    quantity: 0,
  });

  const data = route.params || {
    name: " ",
    image: " ",
    category: " ",
    price: 0.0,
    attribute: " ",
    origin: " ",
    size: "",
    quantity: 0,
  };

  console.log("data", data);

  const handleChange = (key: keyof Plant, value: string) => {
    setProduct({ ...product, [key]: value });
  };

  useEffect(() => {
    dispatch(getCategory());
    setProduct(data);
  }, [dispatch]);

  //   const handleSubmit = () => {
  //     dispatch(addProduct(product)); // Thêm vào Redux và gọi API
  //     console.log("Sản phẩm mới:", product);
  //   };

  const vlueCate = categories.find((ct) => ct.id == product.category);
  console.log("id danh mục", product.category);
  console.log(categories.length);
  console.log("valueCate", vlueCate?.value);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        onBack={""}
        onPressCart={""}
        title={product.id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        icon={"0"}
        back={"0"}
      />
      <Text style={styles.label}>Tên sản phẩm</Text>
      <TextInput
        style={styles.input}
        value={product.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      <Text style={styles.label}>URL Ảnh</Text>
      <TextInput
        multiline
        style={styles.input}
        value={product.image}
        onChangeText={(text) => handleChange("image", text)}
      />

      <Text style={styles.label}>Danh mục</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={product.category?.toString()}
          onValueChange={(itemValue) => handleChange("category", itemValue)}
        >
          <Picker.Item label="-- Chọn danh mục --" value="" />
          {categories.map((cate: Category) => (
            <Picker.Item label={cate.value} value={cate.id} key={cate.id} />
          ))}
        </Picker>
      </View>

      {vlueCate?.value === "Cây trồng" && (
        <>
          <Text style={styles.label}>Thuộc tính</Text>
          <TextInput
            style={styles.input}
            value={product.attribute}
            onChangeText={(text) => handleChange("attribute", text)}
          />
        </>
      )}

      <Text style={styles.label}>Giá</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={product.price.toString()}
        onChangeText={(text) => handleChange("price", text)}
      />

      <Text style={styles.label}>Xuất xứ</Text>
      <TextInput
        style={styles.input}
        value={product.origin}
        onChangeText={(text) => handleChange("origin", text)}
      />

      <Text style={styles.label}>Kích thước</Text>
      <TextInput
        style={styles.input}
        value={product.size}
        onChangeText={(text) => handleChange("size", text)}
      />
      <Text style={styles.label}>Số lượng</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={product.quantity.toString()}
        onChangeText={(text) => handleChange("quantity", text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          data.id ? handleUpdatePlant(product) : handleAddPlant(product);
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00743F",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    textAlignVertical: "top",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 5,
  },
});
