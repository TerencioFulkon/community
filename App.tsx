import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Header, TabBar } from './app/layouts';
import { TAB_ITEMS, TabKey } from './app/layouts/TabBar';
import {
  HomeScreen,
  SpacesScreen,
  PostScreen,
  MessagesScreen,
  NotificationsScreen,
} from './app/screens';
import { Box } from '@gluestack-ui/themed';

const SCREEN_COMPONENTS: Record<TabKey, React.FC> = {
  home: HomeScreen,
  spaces: SpacesScreen,
  post: PostScreen,
  messages: MessagesScreen,
  notifications: NotificationsScreen,
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const ActiveScreen = SCREEN_COMPONENTS[activeTab];
  const currentLabel = useMemo(
    () => TAB_ITEMS.find((tab) => tab.key === activeTab)?.label ?? 'Home',
    [activeTab]
  );

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config} colorMode="light">
        <SafeAreaView style={styles.root}>
          <StatusBar barStyle="dark-content" />
          <Header title={currentLabel} userName="Terry Daine" />
          <Box flex={1} bg="$backgroundLight50">
            <ActiveScreen />
          </Box>
          <TabBar activeKey={activeTab} onTabPress={setActiveTab} />
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
