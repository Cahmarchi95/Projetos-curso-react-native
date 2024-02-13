import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/modal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
  const [size, setSize] = useState(10);
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let randomPassword = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      randomPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(randomPassword);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#ff0000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(parseInt(value))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonTxt}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={password}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  buttonTxt: {
    color: "#FFF",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
