import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"#a065ec"}
        onPress={startAddGoalHandler}
      />
      {modelIsVisible ? (
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modelIsVisible}
          onCancel={endAddGoalHandler}
        />
      ) : null}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
