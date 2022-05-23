import React, { useState } from "react"
import { View, Text, StyleSheet, Vibration } from "react-native"
import { ProgressBar } from "react-native-paper"
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { Countdown } from "../components/Countdown";
import { Timing } from "./Timing";
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
]

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (cb) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    cb(); //reset
    onTimerEnd(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          onEnd={onEnd}
          isPaused={!isStarted}
          onProgress={setProgress}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}> Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View styles={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.white}
          style={{ height: spacing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {
          isStarted ? <RoundedButton title="pause" onPress={() => setIsStarted(false)} /> : <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        }
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.timingWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  timingWrapper: {
    flexDirection: "row",
    border: "1px solid yellow",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.1,
    paddinTop: spacing.xxl,
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  task: {
    color: colors.white,
    textAlign: "center"
  }
})