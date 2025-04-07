import { StyleSheet, Text, TextStyle } from "react-native";
import { View } from "react-native";

export default function Title({title, subtitle}:{title: any, subtitle: any}) {
    const textSize = (size: number,weith: any): TextStyle => ({
        fontSize: size,
        fontWeight: weith
    })
    return(
        <View style={styles.container}>
            <Text style={textSize(35,"bold")}>{title}</Text>
            <Text style={textSize(20,"none")}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 5
    }
})