import { View } from "react-native";
import Header from "./customcomponent/header";
import WrapTextInput from "./customcomponent/wrapinput";
import { useState } from "react";

export default function Search({navigation}: {navigation: any}){
    const [search, setSearch] = useState('')
    return(
        <View>
            <Header onBack={()=>navigation.goBack()} back={require('../img/chevron-left.png')} title={"Search"} icon={' '} onPressCart={''}></Header>
            <WrapTextInput  onchangeText={setSearch} value={search} icon={require('../img/search.png')} placeholder={"Search"}></WrapTextInput>
        </View>
    )
}