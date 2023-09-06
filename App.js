import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors.js';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState(['TempFeature Foces', 'Feature 2']);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
        </>
      ) : (
        <Timer focusSubject={currentSubject} onTimerEnd={(subject) => {setHistory([...history, subject])}} clearSubject={() => {setCurrentSubject(null)}}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
