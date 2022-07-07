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
  const [todos, setTodos] = useState([]);

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>
      <View style={styles.newItemContainer}>
        <Text style={styles.tasksText}>Adicionar Tarefa</Text>

        <TextInput
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
          placeholder={"Título"}
          style={styles.textinput}
        />
        <TextInput
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          placeholder={"Descrição"}
          style={styles.textinput}
        />

        <Pressable
          style={styles.pressable}
          onPress={() => {
            if (title && description) {
              const id = todos.length > 0 ? todos[0]["id"] + 1 : 1;
              setTodos([
                {
                  id,
                  title,
                  description,
                },
                ...todos,
              ]);
              setTitle("");
              setDescription("");
            } else {
              alert(
                "👉 Preencha todos os campos para adicionar uma nova tarefa."
              );
            }
          }}
        >
          <Text style={styles.pressableText}>Adicionar Tarefa</Text>
        </Pressable>
        <Text style={styles.tasksText}>Tarefas</Text>
      </View>

      <ScrollView style={styles.items}>
        {todos.map((todo) => {
          return (
            <Pressable
              key={todo.id}
              onPress={() => {
                deleteTask(todo.id);
              }}
              style={styles.task}
            >
              <Text style={styles.itemTitle}>
                #{todo.id} <Text style={styles.titleBold}>{todo.title}</Text>
              </Text>
              <Text style={styles.itemDesc}>{todo.description}</Text>
            </Pressable>
          );
        })}
        {todos.length < 1 && (
          <Text style={styles.noTasks}>{`Não há tarefas :(`}</Text>
        )}
      </ScrollView>
      <StatusBar backgroundColor="#f9f9f9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  task: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 5,
    padding: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tasksText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "dodgerblue",
    margin: 20,
  },
  noTasks: {
    color: "gray",
    marginTop: "50%",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemTitle: {
    color: "#555",
    borderBottomColor: "dodgerblue",
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 8,
  },
  titleBold: {
    fontWeight: "bold",
  },
  itemDesc: {
    color: "#999",
    fontSize: 15,
    padding: 8,
  },
  title: {
    backgroundColor: "dodgerblue",
    color: "#eadff5",
    textAlign: "center",
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
  newItemContainer: {},
  textinput: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressable: {
    backgroundColor: "dodgerblue",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    padding: 10,
    borderRadius: 10,
  },
  pressableText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  tip: {
    color: "gray",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 13,
    color: "green",
    padding: 3,
  },
});
