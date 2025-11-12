import React from 'react';
import { Box, HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
import { SpaceItem } from 'app/types/feed';
import { Card } from './common/Card';
import { Hash } from 'lucide-react-native';

export interface SpaceCardProps extends SpaceItem {}

const SpaceCardComponent: React.FC<SpaceCardProps> = ({
  name,
  description,
  memberCount,
  iconUrl,
}) => (
  <Card
    accessibilityRole="summary"
    accessibilityLabel={`${name} space with ${memberCount} members`}
  >
    <HStack space="$4" alignItems="center" justifyContent="space-between">
      {iconUrl ? (
        <Image
          source={{ uri: iconUrl }}
          alt={`${name} icon`}
          width={44}
          height={44}
          borderRadius={12}
        />
      ) : (
        <Box
          width={44}
          height={44}
          borderRadius={12}
          bg="$backgroundLight200"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={Hash} size="lg" color="$textLight400" />
        </Box>
      )}
      <VStack space="$1" flex={1}>
        <Text size="md" fontWeight="$semibold" color="$textLight0">
          {name}
        </Text>
        <Text size="sm" color="$textLight500">
          {description}
        </Text>
        <Text size="xs" color="$textLight400">
          {memberCount.toLocaleString()} members
        </Text>
      </VStack>
    </HStack>
  </Card>
);

export const SpaceCard = React.memo(SpaceCardComponent);

export default SpaceCard;
