import React, { useMemo } from 'react';
import { Box, Icon, Image } from '@gluestack-ui/themed';
import { Hash } from 'lucide-react-native';

export interface SpaceIconProps {
  iconUrl?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  accessibilityLabel?: string;
}

const SIZE_MAP: Record<NonNullable<SpaceIconProps['size']>, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80,
};

const FALLBACK_COLORS = [
  '#E0F2FE',
  '#FCE7F3',
  '#E0E7FF',
  '#DCFCE7',
  '#FDE68A',
  '#FFE4E6',
];

const getColorForName = (name?: string): string => {
  if (!name) return FALLBACK_COLORS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length];
};

export const SpaceIcon: React.FC<SpaceIconProps> = ({
  iconUrl,
  name,
  size = 'md',
  accessibilityLabel = name ? `${name} icon` : 'Space icon',
}) => {
  const dimension = SIZE_MAP[size] ?? SIZE_MAP.md;
  const borderRadius = Math.round(dimension * 0.25);
  const fallbackColor = useMemo(() => getColorForName(name), [name]);

  if (iconUrl) {
    return (
      <Image
        source={{ uri: iconUrl }}
        alt={accessibilityLabel}
        width={dimension}
        height={dimension}
        borderRadius={borderRadius}
      />
    );
  }

  return (
    <Box
      width={dimension}
      height={dimension}
      borderRadius={borderRadius}
      bg={fallbackColor}
      alignItems="center"
      justifyContent="center"
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
    >
      <Icon as={Hash} size="lg" color="$textLight400" />
    </Box>
  );
};

export default SpaceIcon;
