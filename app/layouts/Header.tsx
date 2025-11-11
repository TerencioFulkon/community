import React, { useMemo } from 'react';
import { Avatar, AvatarFallbackText, AvatarImage, Box, HStack, Text } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface HeaderProps {
  title: string;
  avatarUrl?: string;
  userName?: string;
}

const getInitials = (name?: string): string => {
  if (!name) return 'NA';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'NA';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
};

export const Header: React.FC<HeaderProps> = ({ title, avatarUrl, userName }) => {
  const insets = useSafeAreaInsets();
  const initials = useMemo(() => getInitials(userName), [userName]);

  return (
    <Box
      bg="$backgroundLight0"
      borderBottomWidth="$1"
      borderColor="$backgroundLight300"
      px="$6"
      pt={insets.top ? insets.top + 12 : 24}
      pb="$4"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text size="lg" fontWeight="$bold" color="$textLight0">
          {title}
        </Text>
        <Avatar size="md" accessibilityLabel="User profile">
          {avatarUrl ? <AvatarImage source={{ uri: avatarUrl }} /> : null}
          <AvatarFallbackText>{initials}</AvatarFallbackText>
        </Avatar>
      </HStack>
    </Box>
  );
};

export default Header;
