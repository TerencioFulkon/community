import React from 'react';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { SpaceItem } from 'app/types/feed';
import { Card } from './common/Card';

export interface SpaceCardProps extends SpaceItem {}

const SpaceCardComponent: React.FC<SpaceCardProps> = ({
  name,
  description,
  memberCount,
}) => (
  <Card
    accessibilityRole="summary"
    accessibilityLabel={`${name} space with ${memberCount} members`}
  >
    <VStack space="$2">
      <Text size="md" fontWeight="$semibold" color="$textLight0">
        {name}
      </Text>
      <Text size="sm" color="$textLight500">
        {description}
      </Text>
      <HStack alignItems="center" justifyContent="space-between">
        <Text size="xs" color="$textLight400">
          {memberCount} members
        </Text>
      </HStack>
    </VStack>
  </Card>
);

export const SpaceCard = React.memo(SpaceCardComponent);

export default SpaceCard;
