import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }


  return (
    <Modal visible={props.visible} animationType={"slide"} >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your Course Goal!"
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />
        </View>
        <View style={styles.button}>
        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
        </View>
      </View>
    </View> 
    </Modal>
  );
   

}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e3d0ff",
    backgroundColor: "#e3d0ff",
    width: "90%",
    padding: 16,
    color : '#120438',
    borderRadius: 6,
  },
  buttonContainer : {
    marginTop: 16,
    flexDirection : 'row',
  },
  image : {
    width : 100,
    height : 100,
    margin : 20,
  },
  button : {
    width : '30%',
    marginHorizontal : 8,
  }
});
