import React from 'react';
import { Box, HStack, Icon, Image, VStack } from '@gluestack-ui/themed';
import { SpaceItem } from 'app/types/feed';
import { Card } from './common/Card';
import { Hash } from 'lucide-react-native';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';
import { CardParagraph } from './common/CardParagraph';

export interface SpaceCardProps extends SpaceItem {}

const SpaceCardComponent: React.FC<SpaceCardProps> = ({
  name,
  description,
  memberCount,
  iconUrl,
  onlineCount = 0,
}) => (
  <Card
    accessibilityRole="summary"
    accessibilityLabel={`${name} space with ${memberCount} members`}
  >
    <HStack space="sm" alignItems="flex-start" justifyContent="space-between">
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
      <VStack space="sm" flex={1}>
        <CardTitleText>{name}</CardTitleText>
        <CardParagraph>{description}</CardParagraph>
        <HStack space="xl"alignItems="center" pt="$1">
          <CardFootnoteText>{memberCount.toLocaleString()} members</CardFootnoteText>
          <HStack alignItems="center" space="sm">
            <Box width={6} height={6} borderRadius={999} bg="#22C55E" />
            <CardFootnoteText>{onlineCount.toLocaleString()} online</CardFootnoteText>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  </Card>
);

export const SpaceCard = React.memo(SpaceCardComponent);

export default SpaceCard;
