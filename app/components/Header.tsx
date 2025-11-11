import React from 'react';
import { Platform, StyleSheet, ViewStyle } from 'react-native';
import {
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  Text,
} from '@gluestack-ui/themed';

export interface HeaderProps {
  title?: string;
  avatarUrl?: string;
  userInitials?: string;
}

const headerStyles = StyleSheet.create({
  sticky: {
    position: (Platform.OS === 'web' ? 'sticky' : 'relative') as ViewStyle['position'],
    top: 0,
    zIndex: 10,
  },
});

export const Header: React.FC<HeaderProps> = ({
  title = 'Home',
  avatarUrl,
  userInitials = 'TL',
}) => {
  return (
    <Box
      bg="$backgroundLight0"
      borderBottomWidth="$1"
      borderColor="$backgroundLight300"
      px="$4"
      py="$3"
      style={headerStyles.sticky}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text size="lg" fontWeight="$bold" color="$textLight0">
          {title}
        </Text>
        <Avatar size="md" bg="$backgroundLight100" accessibilityLabel="Profile avatar">
          {avatarUrl ? <AvatarImage source={{ uri: avatarUrl }} /> : null}
          <AvatarFallback bg="$backgroundLight100">
            <AvatarFallbackText color="$textLight0">{userInitials}</AvatarFallbackText>
          </AvatarFallback>
        </Avatar>
      </HStack>
    </Box>
  );
};

export default Header;
