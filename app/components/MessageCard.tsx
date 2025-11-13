import React from 'react';
import { HStack, VStack } from '@gluestack-ui/themed';
import { MessageItem } from 'app/types/feed';
import { ProfileAvatar } from './ProfileAvatar';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';
import { CardParagraph } from './common/CardParagraph';
import { Indicator } from './Indicator';

export interface MessageCardProps extends MessageItem {}

const MessageCardComponent: React.FC<MessageCardProps> = ({
  senderName,
  senderAvatarUrl,
  preview,
  timestamp,
  unreadMessageCount,
}) => (
  <Card
    accessibilityRole="summary"
    accessibilityLabel={`Message from ${senderName} at ${timestamp}`}
  >
    <HStack space="md" alignItems="flex-start">
      <ProfileAvatar
        name={senderName}
        avatarUrl={senderAvatarUrl}
        accessibilityLabel={`Avatar for ${senderName}`}
      />
      <VStack flex={1} space="sm">
        <HStack justifyContent="space-between" alignItems="center" space="sm">
          <CardTitleText flex={1}>{senderName}</CardTitleText>
          <CardFootnoteText>{timestamp}</CardFootnoteText>
        </HStack>
        <HStack alignItems="flex-start" justifyContent="space-between" space="sm">
          <CardParagraph flex={1} numberOfLines={2}>
            {preview}
          </CardParagraph>
          <Indicator value={unreadMessageCount} />
        </HStack>
      </VStack>
    </HStack>
  </Card>
);

export const MessageCard = React.memo(MessageCardComponent);

export default MessageCard;
