import { FlatList, View } from "react-native";
import Header from "./customcomponent/header";
import ListItemCart from "./customcomponent/itemcart";

export default function Cart(){
    const data = [1,1,1,1,1]
    return(
        <View>
            <Header onBack={''} icon={' '} title={'Cart'} back={require('../img/chevron-left.png')} onPressCart={()=>{}}></Header>
            <FlatList data={data} renderItem={({item})=><ListItemCart/>}></FlatList>
        </View>
    )
}