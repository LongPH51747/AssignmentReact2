import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({
  back,
  icon,
  title,
  onPressCart,
  onBack
}: {
  back: any;
  icon: any;
  title: any;
  onPressCart: any;
  onBack: any
}) {
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity onPress={onBack}>
          <Image source={back}></Image>
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {icon && (
        <TouchableOpacity onPress={onPressCart}>
          <Image source={icon}></Image>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    paddingHorizontal: 20,
    height: 55,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
  },
});
