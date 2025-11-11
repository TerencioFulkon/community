import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import HomeScreen from './app/screens';

const App: React.FC = () => (
  <SafeAreaProvider>
    <GluestackUIProvider config={config} colorMode="light">
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </GluestackUIProvider>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
