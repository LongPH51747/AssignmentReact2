import { Image, StyleSheet, TextInput, View } from "react-native";

const WrapTextInput = ({ placeholder, onchangeText, value, icon }) => {
  return (
    <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onchangeText}
          value={value}
        ></TextInput>
      {icon && (<Image source={icon}/>)}
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 330,
    paddingHorizontal: 10,
  },
  inputcontainer: {
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "rgba(139, 139, 139, 1)",
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
});

export default WrapTextInput;
