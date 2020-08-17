import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { setLocale } from 'src/locale';
import MyApp from 'src/index';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setLocale('en');
    setTimeout(() => setIsReady(true), 2000);
  });

  return (
    <View style={styles.container}>
      <MyApp isReady={isReady} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
