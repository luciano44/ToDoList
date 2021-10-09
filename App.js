import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Example task title",
      description: "Example task description",
    },
  ]);

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.newItemContainer}>
        <TextInput
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
          placeholder={"Title"}
          style={styles.textinput}
        />
        <TextInput
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          placeholder={"Description"}
          style={styles.textinput}
        />

        <Pressable
          style={styles.pressable}
          onPress={() => {
            setTodos([...todos, { id: todos.length + 1, title, description }]);
            setTitle("");
            setDescription("");
          }}
        >
          <Text style={styles.pressableText}>Add Task</Text>
        </Pressable>
      </View>
      <Text style={styles.tip}>
        Tap the tasks to erase as you complete them!
      </Text>
      <ScrollView style={styles.items}>
        {todos.map((todo, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                deleteTask(todo.id);
              }}
              style={styles.task}
            >
              <Text style={styles.itemTitle}>{todo.title}</Text>
              <Text style={styles.itemDesc}>{todo.description}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemTitle: {
    color: "#555",
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 8,
  },
  itemDesc: {
    color: "#999",
    fontSize: 15,
    padding: 8,
  },
  title: {
    backgroundColor: "#242C88",
    color: "#fff",
    fontSize: 20,
    padding: 15,
    paddingTop: 50,
    width: "100%",
  },
  items: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  NewItemContainer: {
    borderWidth: 1,
    borderColor: "#bbb",
  },
  textinput: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 2,
  },
  pressable: {
    backgroundColor: "#242C88",
    width: "100%",
    padding: 10,
  },
  pressableText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  tip: {
    color: "darkgreen",
    backgroundColor: "transparent",
    textAlign: "center",
    padding: 15,
  },
});
