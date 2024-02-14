import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "./../../contexts/CartContext";
import CartItem from "./../../components/CartItem/index";

export default function Cart() {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            data={item}
            addAmount={() => addItemCart(item)}
            subAmount={() => removeItemCart(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
});
