import { StyleSheet, Text, View } from "react-native";

export default function SectionView({ title }: { title: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "100%",
        alignSelf: 'center',
    },
    title: {
        fontSize: 25,
    }
})
