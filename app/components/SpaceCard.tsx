import React, { useState, useCallback } from 'react';
import { Box, Button, ButtonText, HStack, VStack } from '@gluestack-ui/themed';
import { SpaceItem } from 'app/types/feed';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';
import { CardParagraph } from './common/CardParagraph';
import { SpaceIcon } from './SpaceIcon';

export interface SpaceCardProps extends SpaceItem {}

const SpaceCardComponent: React.FC<SpaceCardProps> = ({
  name,
  description,
  memberCount,
  iconUrl,
  onlineCount = 0,
  joined = false,
}) => {
  const [isJoined, setIsJoined] = useState(Boolean(joined));

  const toggleJoin = useCallback(() => {
    setIsJoined((prev) => !prev);
  }, []);

  return (
    <Card
      accessibilityRole="summary"
      accessibilityLabel={`${name} space with ${memberCount} members`}
    >
      <HStack space="md" alignItems="center" justifyContent="space-between">
        <SpaceIcon iconUrl={iconUrl} name={name} size="md" />
        <VStack space="sm" flex={1}>
          <HStack alignItems="center" justifyContent="space-between" space="sm">
            <CardTitleText flex={1}>{name}</CardTitleText>
            <Button
              size="xs"
              variant={isJoined ? 'outline' : 'solid'}
              action={isJoined ? 'secondary' : 'primary'}
              onPress={toggleJoin}
              px="$3"
              py="$1"
              accessibilityRole="button"
              accessibilityLabel={`${isJoined ? 'Leave' : 'Join'} ${name}`}
            >
              <ButtonText>{isJoined ? 'Joined' : 'Join'}</ButtonText>
            </Button>
          </HStack>
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
