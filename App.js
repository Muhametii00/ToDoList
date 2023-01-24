import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      </View>
      <View style={styles.items}>
        <Task text=" Learn React JS" />
        <Task text=" Learn React Native" />
      </View>
      <NewTask text="Add New Task" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
