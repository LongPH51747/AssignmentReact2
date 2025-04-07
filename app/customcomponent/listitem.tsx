import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";

export default function ListItem({img, onPress}:{img: any, onPress: any}) {
  const color = (color: string): TextStyle => ({
    color: color,
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.img}>
        <Image
          width={155}
          height={135}
          source={img}
        ></Image>
      </View>
      <Text style={[color("black")]}>Spider Plant</Text>
      <Text style={[color("rgb(125, 123, 123)")]}>Ưa bóng</Text>
      <Text style={[color("rgba(0, 117, 55, 1)")]}>250.000đ</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    minHeight: 10,
    paddingBottom: 15,
},
img: {
    borderRadius: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
  }
});
