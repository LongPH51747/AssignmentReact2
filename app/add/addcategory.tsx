import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../customcomponent/header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/plantstore";
import { useEffect, useState } from "react";
import {
  addCategoryAction,
  deleteCategoryAction,
  getCategory,
  isCategoryInUse,
  updateCategoryAction,
} from "@/redux/action/categoryaction";
import { getListPlantAction } from "@/redux/action/plantaction";
import SectionView from "../customcomponent/sectionview";
import ListItem from "../customcomponent/listitem";
import { Plant } from "@/redux/reducer/plantreducer";
import { Category } from "@/redux/action/categoryaction";

// type Category = {
//     id?: string
//     value: string
// }

export default function CategoryManager({ navigation }: { navigation: any }) {
  const category = useSelector((state: any) => state.category.listCategory);
  const plant = useSelector((state: any)=>state.plant.listPlant)
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState(false);
  const [value, setCate] = useState("");
  const [id, setId] = useState('');
  const [titleDialog, setTitleDialog] = useState("");

  const handeDeleteCate = async (id: string) => {
    await dispatch(deleteCategoryAction(id));
  };

  const confirmDelete = (id: any) => {
    Alert.alert("Delete this category", "Are you sure?", [
      { text: "NO", style: "cancel" },
      {
        text: "YES",
        onPress: () => {
          handeDeleteCate(id);
        },
      },
    ]);
  };

  const checkPlantInCate = (id: any) => {
    const isUsed = isCategoryInUse(id, plant)
    console.log(id);
    console.log(isUsed);
    
    if (isUsed) {
        Alert.alert("Không thể xóa category", "Category này hiện có ít nhất 1 sản phẩm.\n"+
            "Vui lòng xóa hết sản phẩm thuộc category này để xóa category!")
    }
    else {
        confirmDelete(id)
    }
  }

  const handeUpdateCate = (id: string) => {
    if (value) {
      const objCate: Category = {
        value: value,
      };
      dispatch(updateCategoryAction(objCate, id));
      dispatch(getCategory())
      setModal(false);
    } else {
      Alert.alert("Chưa điền thông tin");
    }
  };

  const handleAddCate = () => {
    if (value) {
      const newCate: Category = {
        value: value,
      };
      dispatch(addCategoryAction(newCate));
      setModal(false);
    } else {
      Alert.alert("Chưa điền thông tin");
    }
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getListPlantAction());
  }, [dispatch]);

  return (
    <View
      style={{
        backgroundColor: "rgba(246, 246, 246, 1)",
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Header
        back={"0"}
        icon={"0"}
        onPressCart={""}
        title={"Category Manager"}
        onBack={() => {}}
      ></Header>
      <ScrollView>
        <FlatList
          style={styles.list}
          data={category}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  marginVertical: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingHorizontal: 20,
                      textAlignVertical: "center",
                    }}
                  >
                    {item.value}
                  </Text>
                  <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity
                      onPress={() => {
                        setModal(true);
                        setId(item.id);
                        setTitleDialog("Sửa Category");
                        setCate(item.value)
                        console.log("idCate: ",item.id);
                        
                      }}
                      style={{
                        backgroundColor: "rgba(0, 117, 55, 1)",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "underline",
                          fontSize: 15,
                          paddingHorizontal: 20,
                          color: "white",
                        }}
                      >
                        Edit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        checkPlantInCate(item.id);
                      }}
                      style={{ backgroundColor: "red", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "underline",
                          fontSize: 15,
                          paddingHorizontal: 20,
                          color: "white",
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0, 117, 55, 1)",
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          setModal(true);
          setTitleDialog("Thêm Category");
          setId('')
          setCate('')
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Thêm
        </Text>
      </TouchableOpacity>
      <Modal visible={modal} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 20 }}> {titleDialog} </Text>
            <TextInput
              style={{ borderBottomWidth: 1 }}
              value={value}
              onChangeText={(text) => setCate(text)}
            ></TextInput>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 117, 55, 1)",
                width: "90%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                margin: 10,
                borderRadius: 10,
              }}
              onPress={() => {
                ;
                id ? handeUpdateCate(id) : handleAddCate();
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 117, 55, 1)",
                width: "90%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 10,
              }}
              onPress={() => {
                setModal(false);
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    elevation: 5,
  },
});
