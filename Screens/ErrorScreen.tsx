import { ImageBackground, StyleSheet, Text } from "react-native";
const im = { uri: "https://img.freepik.com/free-photo/black-texture_1205-327.jpg" };


const ErrorScreen = ( {text , message} : any ) => {
    return (
        <ImageBackground source={im} resizeMode="cover" style={styles.image}>
            <Text style = {styles.text}>{message}</Text>
        </ImageBackground>
    );
}
export default ErrorScreen;
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      textAlign: "center",
    }
  });
  