import React from 'react';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { MessageItem } from 'app/types/feed';
import { ProfileAvatar } from './ProfileAvatar';
import { Card } from './common/Card';

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
    <HStack space="$3" alignItems="flex-start">
      <ProfileAvatar
        name={senderName}
        avatarUrl={senderAvatarUrl}
        accessibilityLabel={`Avatar for ${senderName}`}
      />
      <VStack flex={1} space="$2">
        <HStack justifyContent="space-between" alignItems="center">
          <Text size="md" fontWeight="$semibold" color="$textLight0">
            {senderName}
          </Text>
          <Text size="xs" color="$textLight400">
            {timestamp}
          </Text>
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
