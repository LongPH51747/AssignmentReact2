import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Thư viện icon

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("Lê Thành Long");
  const [email, setEmail] = useState("longltph51747@gmail.com");
  const [address, setAddress] = useState("Yên Nghĩa, Hà Đông, Hà Nội");
  const [phone, setPhone] = useState("0964770530");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        CHỈNH SỬA THÔNG TIN
      </Text>

      {/* Ảnh đại diện */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={require('../img/avata.png')} // Thay ảnh avatar thật
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>

      {/* Hướng dẫn */}
      <Text style={{ textAlign: "center", color: "gray", marginBottom: 20 }}>
        Thông tin sẽ được lưu cho lần mua kế tiếp.
        {"\n"}Bấm vào thông tin chi tiết để chỉnh sửa.
      </Text>

      {/* Các ô nhập thông tin */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Họ và Tên"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Địa chỉ"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Số điện thoại"
        keyboardType="phone-pad"
      />

      {/* Nút lưu thông tin */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LƯU THÔNG TIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#888",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;