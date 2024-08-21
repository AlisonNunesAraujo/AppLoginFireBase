import React,{useContext, useState} from "react";
import {View, Text, SafeAreaView,StyleSheet} from 'react-native'

import { AuthContext } from "../../Contexts";

export default function Profile(){
    const {user} = useContext(AuthContext)


    
    return(
        <SafeAreaView style={styles.conteiner}>
            <View>
                <Text>{}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#808080'
    }
})