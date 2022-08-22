import React from 'react';
import { Text, View ,SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import GridTile from "../Components/GridTile";

import { useQuery } from "react-query";
import LoaderScreen from './LoaderScreen';
import ErrorScreen  from './ErrorScreen';
import Head from "../Components/Head";
import CartScreen from './CartScreen';



const RenderFunction = (props : any) => {
    
    // console.log(props);
    
    return <GridTile name= {props.item.name} Img_url = {props.item.img_url} id= {props.item.id} />
}

const DEFAULT_IMG_URL = "https://i.redd.it/sequence_lhtq7kjhlpp21.png";
const fetchApiData = async () => {
    const {data} = await axios.get("https://api.opensea.io/api/v1/collections?offset=0&limit=50");
    return data;
 }
 
 let hash = 1;
 let formatData = (data:any) =>{
   let dataArray = [];
   for (let entry of data){
     let {name,image_url,stats} = entry;
     
     if(!image_url){
       image_url = DEFAULT_IMG_URL;
     }
    
     let item = {
       "name" : name,
       "img_url" : image_url,
       "price" : 10,
       "id" : hash
     }
     hash++;
     dataArray.push(item);
   }
   return dataArray;
 }

  const HomeScreen  = ({navigation}: {navigation: any}) => {
 
    const result = useQuery("app-data", fetchApiData);
    const {data,isLoading,isError,error} = result;
     if(isLoading){
       return <LoaderScreen/>
     }
     if(axios.isAxiosError(error) && isError){
         
         return (
                 <ErrorScreen error_msg = {error.message} />
             );
     }
 
   let formattedData:any= formatData(data?.collections);
   


   const nav = () => {
    navigation.navigate("CartScreen");
  }
   
   return (
        <SafeAreaView style = {{flex :1}}>
        <Head onclick = {nav}/ >
        <FlatList
           data={formattedData} 
           renderItem={RenderFunction}
           numColumns = {2}
           keyExtractor = { item => item.id}
        />
        </SafeAreaView>
    

   );
 }
 export default HomeScreen;

