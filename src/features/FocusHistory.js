import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

export const FocusHistory = ({ focusItems }) => {
  if (!focusItems || !focusItems.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We haven't focused on anything yet!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Things we have focused on:
      </Text>
      <FlatList
        keyExtractor={(item, index) => `${index.toString()}_${item}`}
        data={focusItems}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },
  title: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
    fontWeight: "bold",
  },
  item: {
    paddingTop: spacing.md,
    fontSize: fontSizes.md,
    color: colors.white,
  }
})