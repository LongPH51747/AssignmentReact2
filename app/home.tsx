import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import SectionView from "./customcomponent/sectionview";
import ListItem from "./customcomponent/listitem";
import Header from "./customcomponent/header";

export default function Home({navigation}:{navigation: any}) {
  const list = [1, 1, 1, 1];
  return (
    <View>
      <Header back={''} icon={require('../img/shopping-cart.png')} onPressCart={()=>navigation.navigate("Cart")} title={'Trang chủ'}></Header>
      <ScrollView style={styles.list}>
        <SectionView title={"Cây trồng"}></SectionView>
        <FlatList
          scrollEnabled={false}
          data={list}
          renderItem={({item})=><ListItem img={require('../img/caytrong.png')} onPress={()=>{navigation.navigate("Detail")}}/>}
          numColumns={2}
          columnWrapperStyle={styles.row}
        ></FlatList>
        <SectionView title={"Chậu cây"}></SectionView>
        <FlatList
          scrollEnabled={false}
          data={list}
          renderItem={({item})=><ListItem img={require('../img/chaucay.png')} onPress={()=>{navigation.navigate("Detail")}}/>}
          numColumns={2}
          columnWrapperStyle={styles.row}
        ></FlatList>
        <SectionView title={"Phụ kiện"}></SectionView>
        <FlatList
          scrollEnabled={false}
          data={list}
          renderItem={({item})=><ListItem img={require('../img/phukien.png')} onPress={()=>{navigation.navigate("Detail")}}/>}
          numColumns={2}
          columnWrapperStyle={styles.row}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    marginBottom: 50
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
