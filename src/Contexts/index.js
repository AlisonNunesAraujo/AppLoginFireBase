import React, { createContext, useId, useState } from "react";
import { auth } from "../services/firebaseConection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false);

  const navigation = useNavigation();

  async function CreateUser(email, senha) {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Registrado", "Sua conta foi criado com sucesso!");
      setLoading(false)
      navigation.goBack();

    } catch (err) {
      Alert.alert("Algo deu errado", "verifique se esta tudo certo");
    }
    setLoading(false)
  }

  async function Login(email, senha) {
    setLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, senha);
   

      setUser({
        email: user.user.email,
        id: user.user.uid,
      });
      setLoading(false)
    } catch (err) {
      alert("erro");
      console.log("erro ao logar", err);
    }
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, CreateUser, Login, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
