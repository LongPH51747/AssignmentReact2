import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Header from "./customcomponent/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/redux/action/categoryaction";
import ListItem from "./customcomponent/listitem";

type Category = {
  id: string;
  value: string;
};

export default function Regular({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { data, id } = route.params as { data: any[]; id: string };
  const [title, setTitle] = useState<Category | null>(null);
  console.log("id", id);

  const getCate = async (id: string) => {
    try {
      const repon = await axios.get(`${apiUrl}/${id}`);
      setTitle(repon.data);
      console.log("cate", repon.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getCate(id);
      console.log("cate", getCate(id));
    }
  }, [id]);
  return (
    <View style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100%" }}>
      <Header
        onPressCart={""}
        title={title?.value ?? "..."}
        icon={require("../img/shopping-cart.png")}
        back={require("../img/chevron-left.png")}
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={data}
          columnWrapperStyle={styles.row}
          numColumns={2}
          renderItem={({ item }) => (
            <ListItem
              plant={item}
              onPress={() => {
                navigation.navigate("Detail", item);
              }}
              deleteimg={""}
              updateimg={""}
              onDelete={""}
              onUpdate={""}
            />
          )}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});
