import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Head from "../Components/Head";
import CartTile from "../Components/CartTile";
import { FlatList } from "react-native-gesture-handler";
import ProductStore from "../zusstore";


const RenderFn = ( props : any ) : any => {
    <CartTile name = {props.name} Img_url = {props.img_url} id= {props.id} />
}
const CartScreen = ({navigation}: {navigation: any}) => {
    const CartData = ProductStore(state => state.cart);
    // console.log(CartData);
    const cartPress = () => {
    
        navigation.navigate("HomeScreen");
       }
       console.log(ProductStore(state=>state.cart))

    return (
        
        
        <SafeAreaView style = {{flex :1}}>

            <Head onclick = {cartPress} />
            <FlatList 
             data={CartData}
             renderItem = {RenderFn}
            keyExtractor = {item => item.id} 
            numColumns = {1}
            />

        </SafeAreaView>
    );

} 

export default CartScreen;