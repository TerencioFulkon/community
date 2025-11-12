import React from 'react';
import { Box } from '@gluestack-ui/themed';
import Header from './Header';
import TabBar, { TabBarProps, TabKey } from './TabBar';

export interface ScreenContainerProps {
  title: string;
  activeTab: TabKey;
  onTabPress: TabBarProps['onTabPress'];
  children: React.ReactNode;
  avatarUrl?: string;
  userName?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  title,
  activeTab,
  onTabPress,
  children,
  avatarUrl,
  userName = 'Terry Daine',
}) => {
  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header title={title} userName={userName} avatarUrl={avatarUrl} />
      <Box flex={1}>{children}</Box>
      <TabBar activeKey={activeTab} onTabPress={onTabPress} />
    </Box>
  );
};

export default ScreenContainer;

