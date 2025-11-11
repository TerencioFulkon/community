import React, { useMemo } from 'react';
import { Avatar, AvatarFallbackText, AvatarImage } from '@gluestack-ui/themed';

export interface ProfileAvatarProps {
  name?: string;
  avatarUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  accessibilityLabel?: string;
}

const getInitials = (name?: string): string => {
  if (!name) return 'NA';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'NA';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  avatarUrl,
  size = 'md',
  accessibilityLabel = 'User avatar',
}) => {
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <Avatar size={size} accessibilityLabel={accessibilityLabel}>
      {avatarUrl ? <AvatarImage source={{ uri: avatarUrl }} /> : null}
      <AvatarFallbackText>{initials}</AvatarFallbackText>
    </Avatar>
  );
};

export default ProfileAvatar;

