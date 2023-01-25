import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

const Task = (props) => {
  const [isSelected, setisSelected] = useState(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Checkbox
          style={styles.square}
          disabled={false}
          value={isSelected}
          onValueChange={(newValue) => setisSelected(newValue)}
        ></Checkbox>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#FFF",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    border: 2,
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
