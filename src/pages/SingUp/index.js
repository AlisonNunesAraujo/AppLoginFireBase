import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../../Contexts";



export default function SingUp() {

  const navigation = useNavigation();
  const { SingUp, CreateUser,loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Add(){
    if(email === '' | senha === ''){
      Alert.alert("Preencha todos os campos","Voçe não deve deixar algun campo vazio!")
    }
    CreateUser(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>Tela de cadastro</Text>

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.inputs}
        />
        <TextInput
          placeholder="****"
          value={senha}
          onChangeText={setSenha}
          style={styles.inputs}
        />

        <TouchableOpacity onPress={Add} style={styles.button}>
          {
            loading ? (
              <ActivityIndicator size={30} color="white"/>
            ) : (
              <Text style={styles.text}>Criar</Text>
            )
          }
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SingIn")}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
  },
  inputs: {
    width: "90%",
    padding: 20,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    padding: 15,
    width: "90%",
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
