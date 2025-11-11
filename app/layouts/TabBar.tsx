import React from 'react';
import { Box, HStack, Icon, Pressable } from '@gluestack-ui/themed';
import { Home, Hash, Plus, MessageCircle, Bell } from 'lucide-react-native';

export type TabKey = 'home' | 'spaces' | 'post' | 'messages' | 'notifications';

export interface TabItem {
  key: TabKey;
  label: string;
  icon: typeof Home;
}

export const TAB_ITEMS: TabItem[] = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'spaces', label: 'Spaces', icon: Hash },
  { key: 'post', label: 'Post', icon: Plus },
  { key: 'messages', label: 'Messages', icon: MessageCircle },
  { key: 'notifications', label: 'Notifications', icon: Bell },
];

export interface TabBarProps {
  activeKey?: TabKey;
  onTabPress?: (key: TabKey) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ activeKey = 'home', onTabPress }) => {
  return (
    <Box
      bg="$backgroundLight0"
      borderTopWidth="$1"
      borderColor="$backgroundLight200"
      px="$6"
      pt="$4"
      pb="$4"
    >
      <HStack alignItems="center" justifyContent="space-around">
        {TAB_ITEMS.map((tab) => {
          const isActive = tab.key === activeKey;

          return (
            <Pressable
              key={tab.key}
              flex={1}
              alignItems="center"
              accessibilityRole="button"
              accessibilityLabel={`${tab.label} tab`}
              accessibilityState={{ selected: isActive }}
              onPress={() => onTabPress?.(tab.key)}
              hitSlop={12}
            >
              <Icon
                as={tab.icon}
                size="xl"
                color={isActive ? '$text0' : '$textLight400'}
              />
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
};

export default TabBar;

