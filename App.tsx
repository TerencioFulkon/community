import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import FeedScreen from './app/screens';
import themeConfig from './app/theme/gluestack.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={themeConfig}>
        <SafeAreaView style={styles.root}>
          <StatusBar barStyle="dark-content" />
          <FeedScreen />
        </SafeAreaView>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

