import React from 'react';
import { Box, HStack } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageHeading, ProfileAvatar } from 'app/components';

export interface HeaderProps {
  title: string;
  avatarUrl?: string;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, avatarUrl, userName }) => {
  const insets = useSafeAreaInsets();
  const topPadding = insets.top > 0 ? insets.top + 12 : 24;

  return (
    <Box
      bg="$backgroundLight0"
      borderBottomWidth="$1"
      borderColor="$backgroundLight200"
      px="$6"
      py="$5"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <PageHeading>{title}</PageHeading>
        <ProfileAvatar name={userName} avatarUrl={avatarUrl} accessibilityLabel="User profile" />
      </HStack>
    </Box>
  );
};

export default Header;
