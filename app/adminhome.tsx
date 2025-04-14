import {
    Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./customcomponent/header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/plantstore";
import { useEffect } from "react";
import { deleteCategoryAction, getCategory } from "@/redux/action/categoryaction";
import { deletePlantAction, getListPlantAction } from "@/redux/action/plantaction";
import SectionView from "./customcomponent/sectionview";
import ListItem from "./customcomponent/listitem";
import { deletePlant, Plant } from "@/redux/reducer/plantreducer";

type GroupedPlants = {
  [categoryId: string]: Plant[];
};

export const selectGroupedPlantsByCategory = (
  state: RootState
): GroupedPlants => {
  const groupedPlants: GroupedPlants = {};

  // Lặp qua toàn bộ danh sách cây
  state.plant.listPlant.forEach((plant: any) => {
    const category = plant.category;

    // Nếu chưa có key cho category này, tạo một mảng rỗng
    if (!groupedPlants[category]) {
      groupedPlants[category] = [];
    }

    // Thêm plant vào mảng tương ứng với category
    groupedPlants[category].push(plant);
  });

  return groupedPlants;
};

export default function AdminHome({ navigation }: { navigation: any }) {
  const category = useSelector((state: any) => state.category.listCategory);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async (id: any) => {
    try {
        console.log("lỗi tại adminScreen1");
        await dispatch(deletePlantAction(id)) 
        console.log("lỗi tại adminScreen2");       
    } catch (error) {
        console.log("lỗi tại adminScreen",error);
    }
  }

  const confirmDelete = (id: any)=>{
    Alert.alert(`Xóa sản phẩm này`,"Bạn chắc chắn chứ?",[
        {text: 'NO', style: 'cancel'},
        {text: "YES", onPress: ()=>{handleDelete(id)}}
    ])
  }

  const groupedPlants = useSelector(selectGroupedPlantsByCategory);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getListPlantAction());
  }, [dispatch]);

  return (
    <View style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100%" }}>
      <Header
        back={require("../img/plus-square.png")}
        icon={require("../img/bookmark.png")}
        onPressCart={() => {
          navigation.navigate("CategoryManager");
        }}
        title={"Welcome Back Sir"}
        onBack={() => navigation.navigate("AddProductScreen")}
      ></Header>
      <ScrollView>
        <FlatList
          style={styles.list}
          data={category.filter(
            (category: any) => groupedPlants[category.id]?.length > 0
          )}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <SectionView title={item.value}></SectionView>
                <FlatList
                  columnWrapperStyle={styles.row}
                  scrollEnabled={false}
                  data={groupedPlants[item.id]}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item}) => (
                    <ListItem
                      plant={item}
                      onPress={() => {
                        navigation.navigate("Detail", item);
                      }}
                      deleteimg={"xóa"}
                      updateimg={"edit"}
                      onDelete={()=>{confirmDelete(item.id)}}
                      onUpdate={()=>{navigation.navigate("AddProductScreen",item)}}
                    />
                  )}
                  numColumns={2}
                ></FlatList>
                <View style={{ paddingVertical: 10 }}></View>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                  }}
                  onPress={() => {
                    navigation.navigate("Regular", {
                      data: groupedPlants[item.id],
                      id: item.id,
                    });
                  }}
                >
                  <Text style={{ textDecorationLine: "underline" }}>
                    Xem thêm {item.value}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
