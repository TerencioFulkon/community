import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import {
  HomeScreen,
  SpacesScreen,
  PostScreen,
  MessagesScreen,
  NotificationsScreen,
} from 'app/screens';
import { TabKey } from 'app/layouts/TabBar';
import { ScreenProps } from 'app/screens/types';

const SCREEN_COMPONENTS: Record<TabKey, React.FC<ScreenProps>> = {
  home: HomeScreen,
  spaces: SpacesScreen,
  post: PostScreen,
  messages: MessagesScreen,
  notifications: NotificationsScreen,
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const ActiveScreen = SCREEN_COMPONENTS[activeTab];

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config} colorMode="light">
        <SafeAreaView style={styles.root}>
          <StatusBar barStyle="dark-content" />
          <ActiveScreen activeTab={activeTab} onTabPress={setActiveTab} />
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
