import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function ButtonForm({
  title,
  text,
  subtitle,
  onPress,
  onPressRegister,
}: {
  title: any;
  text: any;
  subtitle: any;
  onPress: any;
  onPressRegister: any;
}) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <LinearGradient
          colors={["rgba(0, 117, 55, 1)", "rgba(76, 175, 80, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.row}>
        <LinearGradient
          colors={["rgba(76, 175, 80, 1)", "rgba(76, 175, 80, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.border}
        ></LinearGradient>
        <Text>Hoặc</Text>
        <LinearGradient
          colors={["rgba(76, 175, 80, 1)", "rgba(76, 175, 80, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.border}
        ></LinearGradient>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 100,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../img/flat-color-icons_google.png")}
        ></Image>
        <Image source={require("../../img/logos_facebook.png")}></Image>
      </View>
      {subtitle && (
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text>{text} </Text>
          <TouchableOpacity onPress={onPressRegister}>
            <Text style={styles.text}>{subtitle}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 330,
    height: 50,
    alignSelf: "center",
    marginTop: 10,
  },
  gradient: {
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "rgba(0, 146, 69, 1)",
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: 330,
    alignSelf: "center",
  },
  border: {
    width: 125,
    height: 1.2,
  },
});
