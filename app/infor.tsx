import { Text, View } from "react-native";
import Header from "./customcomponent/header";
import OrderItem from "./customcomponent/iteminfor";

export default function Infor(){
    return(
        <View>
            <Header back={require('../img/chevron-left.png')} title={"Thông báo"} icon={' '}></Header>
            {/* <Text style={{fontSize: 16, alignSelf: 'center' , paddingVertical: 20}}> Hiện chưa có thông báo nào cho bạn </Text> */}
            <OrderItem/>
        </View>
    )
}