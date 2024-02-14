import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Produto({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>
      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.buttonText} onPress={addToCart}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  buttonAdd: {
    backgroundColor: "#168fff",
    paddingEnd: 12,
    paddingStart: 12,
    paddingTop: 6,
    paddingBottom: 6,
    marginRight: 14,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
});
