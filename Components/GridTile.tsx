import { Text,View, Pressable,StyleSheet,Image, ImageSourcePropType, Button, Alert } from "react-native";
import ProductStore from "../zusstore";


const Item = ( props : any) => {
  let zusFunction = ProductStore(state => state.addToCart);
    console
    return(
        <View style = {styles.gridItem}>
        <Pressable  
                    style={({ pressed }) => [
                        styles.button, pressed ? styles.buttonPressed : null,]}
                         >
          
            <View style={styles.innerContainer}>
                <Image source = { {uri : props.Img_url} }  
                        style = { { 
                        flex: 1,
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',}
                }/>
                <Text style = {styles.title}>{props.name}</Text>

                <Button title = "Add to Cart" 
                    color = "#f194ff"
                    onPress={()=>{
                    
                    zusFunction({"id" : props.id,"name" :props.name,"img" : props.Img_url})
                  
                  
                }}
                />
            </View>
        </Pressable>
    </View>
    );
}
export default Item;
const styles = StyleSheet.create({
    gridItem: {
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
    button: {
      flex: 1,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      backgroundColor: "#505050" ,
      justifyContent : "space-around",
      flex: 1,
      padding: 10,
      borderRadius: 8,
    //  
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    btn:{
        color : "black",
        fontWeight: "bold"

    }
  });

  