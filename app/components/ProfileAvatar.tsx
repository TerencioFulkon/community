import React, { useMemo } from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';

export interface ProfileAvatarProps {
  name?: string;
  avatarUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  accessibilityLabel?: string;
}

const SIZE_MAP: Record<NonNullable<ProfileAvatarProps['size']>, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80,
};

const getInitials = (name?: string): string => {
  if (!name) return 'NA';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'NA';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
};

const FALLBACK_COLORS: string[] = [
  '#EF4444', // red-500
  '#F97316', // orange-500
  '#FACC15', // amber-400
  '#22C55E', // green-500
  '#10B981', // emerald-500
  '#06B6D4', // cyan-500
  '#0EA5E9', // sky-500
  '#3B82F6', // blue-500
  '#6366F1', // indigo-500
  '#8B5CF6', // violet-500
  '#A855F7', // purple-500
  '#EC4899', // pink-500
];

const DEFAULT_FALLBACK_COLOR = '#3B82F6';

const getColorForName = (name?: string): string => {
  if (!name) return DEFAULT_FALLBACK_COLOR;

  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length];
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  avatarUrl,
  size = 'sm',
  accessibilityLabel = 'User avatar',
}) => {
  const initials = useMemo(() => getInitials(name), [name]);
  const bgColor = useMemo(() => getColorForName(name), [name]);
  const avatarSize = SIZE_MAP[size] ?? SIZE_MAP.sm;

  return (
    <Avatar
      size={size}
      borderRadius="$full"
      bg={bgColor}
      style={{
        width: avatarSize,
        height: avatarSize,
      }}
      accessibilityLabel={accessibilityLabel}
    >
      <AvatarFallbackText color="$white">
        {name ?? initials}
      </AvatarFallbackText>
      {avatarUrl ? (
        <AvatarImage
          source={{ uri: avatarUrl }}
          alt={name ?? 'User avatar'}
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }}
        />
      ) : null}
    </Avatar>
  );
};

export default ProfileAvatar;
