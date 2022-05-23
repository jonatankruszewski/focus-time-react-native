import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { spacing } from "../utils/sizes"
import { TextInput } from "react-native-paper"
import { RoundedButton } from "../components/RoundedButton"
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={subject}
          label="What would you like to focus on?"
          onChangeText={(value) => setSubject(value)}
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            title="+" size={50} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "center",
    flexDirection: "row"
  },
  button: {
    justifyContent: "center"
  }
})