// import { FlatList, View } from "react-native";
// import Header from "./customcomponent/header";
// import { ScrollView } from "react-native-gesture-handler";
// import SectionView from "./customcomponent/sectionview";
// import ListItem from "./customcomponent/listitem";
// import { useNavigation } from "expo-router";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCategory } from "@/redux/action/categoryaction";
// import { AppDispatch, RootState } from "@/redux/store/plantstore";
// import { getListPlantAction } from "@/redux/action/plantaction";
// type Plant = {
//   id: string;
//   name: string;
//   image: string;
//   category: string;
//   price: string;
//   attribute: string;
//   origin: string;
//   size: string;
//   quantity: string;
// };
// type GroupedPlants = {
//   [categoryId: string]: Plant[];
// };

// export const selectGroupedPlantsByCategory = (
//   state: RootState
// ): GroupedPlants => {
//   const groupedPlants: GroupedPlants = {};

//   // Lặp qua toàn bộ danh sách cây
//   state.plant.listPlant.forEach((plant: any) => {
//     const category = plant.category;

//     // Nếu chưa có key cho category này, tạo một mảng rỗng
//     if (!groupedPlants[category]) {
//       groupedPlants[category] = [];
//     }

//     // Thêm plant vào mảng tương ứng với category
//     groupedPlants[category].push(plant);
//   });

//   return groupedPlants;
// };

// export default function Test({ navigation }: { navigation: any }) {
//   const list = useSelector((state: any) => state.plant.listPlant);
//   const category = useSelector((state: any) => state.category.listCategory);
//   const dispatch = useDispatch<AppDispatch>();

//   const groupedPlants = useSelector(selectGroupedPlantsByCategory);

//   useEffect(() => {
//     dispatch(getCategory());
//     dispatch(getListPlantAction());
//   }, [dispatch]);

//   return (
//     <View>
//       <Header
//         back={""}
//         icon={require("../img/shopping-cart.png")}
//         onPressCart={() => navigation.navigate("Cart")}
//         title={"Trang chủ"}
//         onBack={()=>navigation.goBack()}
//       ></Header>
//       <ScrollView>
//         <FlatList
//           data={category.filter((category: any) => groupedPlants[category.id]?.length > 0)}
//           scrollEnabled={false}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => {
//             return (
//               <View>
//                 <SectionView title={item.value}></SectionView>
//                 <FlatList
//                   scrollEnabled={false}
//                   data={groupedPlants[item.id]}
//                   keyExtractor={(item)=>item.id.toString()}
//                   renderItem={({ item }) => (
//                     <ListItem
//                       plant={item}
//                       onPress={() => {
//                         navigation.navigate("Detail");
//                       }}
//                     />
//                   )}
//                   numColumns={2}
//                 ></FlatList>
//               </View>
//             );
//           }}
//         ></FlatList>
//       </ScrollView>
//     </View>
//   );
// }
