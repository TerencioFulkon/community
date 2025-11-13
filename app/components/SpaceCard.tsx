import React from 'react';
import { Box, HStack, VStack } from '@gluestack-ui/themed';
import { SpaceItem } from 'app/types/feed';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';
import { CardParagraph } from './common/CardParagraph';
import { SpaceIcon } from './SpaceIcon';

export interface SpaceCardProps extends SpaceItem {}

const slugify = (value: string) =>
  `s/${value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;

const SpaceCardComponent: React.FC<SpaceCardProps> = ({
  name,
  description,
  memberCount,
  iconUrl,
  onlineCount = 0,
  isUnread = false,
}) => {

  return (
    <Card
      accessibilityRole="summary"
      accessibilityLabel={`${name} space with ${memberCount} members`}
    >
      <HStack space="md" alignItems="center" justifyContent="space-between">
        <SpaceIcon iconUrl={iconUrl} name={name} size="md" />
        <VStack space="sm" flex={1}>
          <CardTitleText>{slugify(name)}</CardTitleText>
          <CardParagraph>{description}</CardParagraph>
          <HStack space="xl" alignItems="center" pt="$1">
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
};

export const SpaceCard = React.memo(SpaceCardComponent);

export default SpaceCard;
