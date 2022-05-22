import React, {useState} from 'react';
import { Text, View, SafeAreaView, Platform, StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import {colors} from "./src/utils/colors"
import {Focus} from "./src/features/Focus"
import {Timer} from "./src/features/Timer"
import {FocusHistory} from "./src/features/FocusHistory"


export default function App() {
  const [currentSubject, setCurrentSubject]= useState(null)
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
      <>
        <Focus addSubject={setCurrentSubject}/> 
        <FocusHistory focusItems={history}/>
      </>: 
     <Timer focusSubject={currentSubject} onTimerEnd={()=>{
        setHistory([...history, currentSubject])
        setCurrentSubject(null)}
        }
      clearSubject={()=>setCurrentSubject(null)}/>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
});