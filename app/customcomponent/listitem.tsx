import { Plant } from "@/redux/reducer/plantreducer";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListItem({
  plant,
  onPress,
  deleteimg,
  updateimg,
  onDelete,
  onUpdate,
}: {
  plant: Plant;
  onPress: any;
  deleteimg: any;
  updateimg: any;
  onDelete: any;
  onUpdate: any;
}) {
  const color = (color: string): TextStyle => ({
    color: color,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.img}>
          <Image
            resizeMode="contain"
            width={155}
            height={135}
            source={{ uri: plant.image }}
          ></Image>
        </View>
        <Text style={[color("black")]}>{plant.name}</Text>
        {plant.attribute && (
          <>
            <Text style={[color("rgb(125, 123, 123)")]}>{plant.attribute}</Text>
          </>
        )}
        <Text style={[color("rgba(0, 117, 55, 1)")]}>{plant.price}đ</Text>
      </TouchableOpacity>

      {deleteimg && updateimg && (
        <View
          style={{
            width: "40%",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={onDelete}
            style={{
              backgroundColor: "red",
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: "underline",
                color: "white",
              }}
            >
              {deleteimg}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onUpdate}
            style={{
              backgroundColor: "green",
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: "underline",
                color: "white",
              }}
            >
              {updateimg}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
  },
});
