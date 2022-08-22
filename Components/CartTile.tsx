import { Text,View, Pressable,StyleSheet,Image, ImageSourcePropType, Button } from "react-native";

const CartTile = (props :any) =>{
    
    return (
       <View style ={styles.container}>
            <Image source = {{uri : props.Img_url}} style = {{ flex: 1,
                 width: 180,
                 height: 180,
                resizeMode: 'contain',
            }}/>
            <Text style ={styles.title} >{props.name} </Text>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "grey",
        margin: 5,
         height: 250,
         borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});
export default CartTile;