import React,{useContext, useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../Contexts";

export default function SingIn() {

    const navigation = useNavigation();
    const{Login, loading}=useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function SingIn() {
      Login(email,senha)
    }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>
          Bem <Text>Vindo</Text>
        </Text>
        <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={styles.inputs} />
        <TextInput
          placeholder="****"
          secureTextEntry
          keyboardType="numeric"
          value={senha}
          onChangeText={setSenha}
          style={styles.inputs}
        />

        <TouchableOpacity onPress={SingIn} style={styles.button}>
          {
            loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.text}>Entrar</Text>
            )
          }
          
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('cadastro') } >
          <Text>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#808080'
  },
  inputs: {
    width: "90%",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  button:{
    width: '90%',
    padding: 15,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text:{
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  }
});
