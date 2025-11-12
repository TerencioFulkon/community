import React from 'react';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { MessageItem } from 'app/types/feed';
import { ProfileAvatar } from './ProfileAvatar';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';

export interface MessageCardProps extends MessageItem {}

const MessageCardComponent: React.FC<MessageCardProps> = ({
  senderName,
  senderAvatarUrl,
  preview,
  timestamp,
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
        <HStack justifyContent="space-between" alignItems="center">
          <CardTitleText flex={1}>{senderName}</CardTitleText>
          <CardFootnoteText>{timestamp}</CardFootnoteText>
        </HStack>
        <Text size="sm" color="$textLight500" numberOfLines={2}>
          {preview}
        </Text>
      </VStack>
    </HStack>
  </Card>
);

export const MessageCard = React.memo(MessageCardComponent);

export default MessageCard;
