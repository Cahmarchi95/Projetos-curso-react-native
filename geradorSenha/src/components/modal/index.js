import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);

    alert("Senha salva com sucesso!");

    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Senha gerada</Text>
        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>
        <View style={styles.areaButtons}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#392de9" }]}
            onPress={handleCopyPassword}
          >
            <Text
              style={[styles.textButton, { color: "#FFF", fontWeight: "bold" }]}
            >
              Salvar Senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "rgba(24,24,24,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#FFFF",
    width: "85%",
    paddingBottom: 24,
    paddingTop: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: "#FFFF",
    textAlign: "center",
  },
  areaButtons: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flexGrow: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    borderRadius: 8,
  },
});
