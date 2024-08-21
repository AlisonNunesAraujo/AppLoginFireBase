import React from "react";
import {View,Text, SafeAreaView, StyleSheet} from 'react-native'

export default function Home(){
    return(
        <SafeAreaView style={styles.conteiner}>
            <View >
                <Text>home</Text>
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