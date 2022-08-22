import React from 'react';
import { View, Image, StyleSheet ,Text } from 'react-native';
import { Pressable } from 'react-native';

const Head = (props: any) => {
  console.log(props);
  return (
    <View style={styles.container}>
    <Image style = {styles.logoimage}
        source={{uri : "https://img.freepik.com/free-vector/illustration-boutique-shop-logo-stamp-banner_53876-6862.jpg" }}
      />
      <Text style = {{fontSize : 25 , fontWeight:'bold'}}> Shopper</Text>
      <Pressable  onPress={props.onclick}>
        <Image style= {styles.tinyLogo} 
         source={require('../assets/478-4788427_shopping-cart-button-shopping-cart-logo-white-hd.png')}/>
 
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : "grey",
        alignSelf : "stretch" ,
        flexDirection : "row",
        alignItems:"center",
        justifyContent:"space-between",
        padding :  10
    },
    tinyLogo: {
      width: 50,
      height: 50,
      
    },
    logo: {
      width: 50,
      height: 50,
    },
    logoimage:{
        width : 50,
        height : 50
    }
  });
  export default Head;