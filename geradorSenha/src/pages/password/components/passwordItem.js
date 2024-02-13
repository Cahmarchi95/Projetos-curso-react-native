import {
  StyleSheet,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PasswordItem({ data, removePassword }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <TextInput
        style={styles.text}
        value={data}
        secureTextEntry={passwordVisible}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        {passwordVisible ? (
          <Ionicons name="eye" color="#FFF" size={25} />
        ) : (
          <Ionicons name="eye-off" color="#FFF" size={25} />
        )}
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
