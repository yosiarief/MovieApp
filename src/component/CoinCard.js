import React from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    Image
 } from 'react-native';
 import {images} from '../Utils/CoinIcons';

 const styles = StyleSheet.create({
    container:{
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 20,
    },
    upperRow:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol:{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold',
    },
    coinName:{
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
    },
    separator:{
        marginTop: 10,
    },
    coinPrice:{
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold',
    },
    image:{
        width: 40,
        height: 40,
    },
    moneySymbol:{
        fontWeight: 'bold',
    },
    statisticContainer:{
        display: 'flex',
        borderTopColor: '#FAFAFA',
        borderTopWidth: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    percentChangePlus:{
        color: '#00BFA5',
        fontWeight: 'bold',
        marginLeft: 5
    },
    percentChangeMinus:{
        color: '#DD2C00',
        fontWeight: 'bold',
        marginLeft: 5
    }
 })

 const {container, image, moneySymbol, upperRow, coinSymbol, coinName, coinPrice, statisticContainer, separator, percentChangePlus, percentChangeMinus} = styles;

 const CoinCard = ({coin_name}) =>{
    return(
        <View style={container}>
            <View style={upperRow}>
                
                <Text style={coinName}>{coin_name}</Text>
                
            </View>

           
            
        </View>
    )
 }



export default CoinCard;