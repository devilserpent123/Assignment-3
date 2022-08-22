import { ImageBackground, StyleSheet, Text } from "react-native";
const image = { uri: "https://i.stack.imgur.com/87Tpa.gif" }

const LoaderScreen = () => {
    return (
        
        <ImageBackground source={image} 
            resizeMode="cover" 
            style={ { flex: 1,
            justifyContent: "center"
          }}>
        </ImageBackground>
    );
}
export default LoaderScreen;

  