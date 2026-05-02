import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodoScreen() {
  const [task, setTask] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [todoList, setTodoList] = useState([
    { id: 1, text: "Learn react native flexbox", completed: true },
    { id: 2, text: "Create todo app", completed: false },
  ]);

  const filteredTodos = todoList.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTodo = () => {
    if (!task.trim()) return;

    setTodoList([
      { id: Date.now(), text: task, completed: false },
      ...todoList,
    ]);

    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const confirmDelete = (id: number) => {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTodo(id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchBar}
          />
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView>
          {filteredTodos.map((item) => (
            <View key={item.id} style={styles.todoItem}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
                onPress={() => toggleTodo(item.id)}
              >
                <Ionicons
                  name={item.completed ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={item.completed ? "#7D7AFF" : "#CCC"}
                />
                <Text
                  style={[
                    styles.todoText,
                    item.completed && styles.completedText,
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <Ionicons name="trash-outline" size={22} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Add task..."
              value={task}
              onChangeText={setTask}
              style={styles.input}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
              <Ionicons name="add" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#7D7AFF" },
  header: { paddingTop: 70, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff" },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },

  searchBar: { flex: 1, marginLeft: 10 },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },

  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 15,
    marginBottom: 10,
  },

  todoText: { marginLeft: 10, fontSize: 16 },
  completedText: { textDecorationLine: "line-through", color: "#aaa" },

  inputWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 15,
  },

  addButton: {
    backgroundColor: "#FFCC00",
    marginLeft: 10,
    padding: 15,
    borderRadius: 15,
  },
});