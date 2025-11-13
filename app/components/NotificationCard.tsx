import React from 'react';
import { HStack, VStack } from '@gluestack-ui/themed';
import { NotificationItem } from 'app/types/feed';
import { Card } from './common/Card';
import { CardFootnoteText } from './common/CardFootnoteText';
import { CardParagraph } from './common/CardParagraph';
import { ProfileAvatar } from './ProfileAvatar';
import { SpaceIcon } from './SpaceIcon';

export interface NotificationCardProps extends NotificationItem {}

const NotificationCardComponent: React.FC<NotificationCardProps> = ({
  description,
  timestamp,
  actorName,
  actorAvatarUrl,
  spaceName,
  spaceIconUrl,
  unreadMessageCount,
  isUnread,
}) => {
  const hasActor = Boolean(actorName);
  const hasSpace = Boolean(spaceName || spaceIconUrl);
  const isHighlighted = Boolean(isUnread || (unreadMessageCount ?? 0) > 0);

  return (
    <Card
      bg={isHighlighted ? '#E0F2FF' : undefined}
      accessibilityRole="summary"
      accessibilityLabel={`Notification at ${timestamp}`}
    >
      <VStack space="sm">
        {(hasActor || hasSpace) ? (
          <HStack space="xs" alignItems="flex-start" justifyContent="space-between">
            {hasActor ? (
              <ProfileAvatar
                name={actorName}
                avatarUrl={actorAvatarUrl}
                accessibilityLabel={`Avatar for ${actorName}`}
                size="md"
              />
            ) : (
              <SpaceIcon iconUrl={spaceIconUrl} name={spaceName} size="md" />
            )}
            <CardParagraph flex={1} ml="$3">
              {description}
            </CardParagraph>
            <CardFootnoteText>{timestamp}</CardFootnoteText>
          </HStack>
        ) : (
          <HStack alignItems="flex-start" justifyContent="space-between" space="sm">
            <CardParagraph flex={1}>{description}</CardParagraph>
            <CardFootnoteText>{timestamp}</CardFootnoteText>
          </HStack>
        )}
      </VStack>
    </Card>
  );
};

export const NotificationCard = React.memo(NotificationCardComponent);

export default NotificationCard;
