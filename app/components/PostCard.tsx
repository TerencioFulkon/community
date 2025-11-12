import React from 'react';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { ProfileAvatar } from './ProfileAvatar';
import { PostItem } from 'app/types/feed';
import { Card } from './common/Card';

export interface PostCardProps extends PostItem {}

const PostCardComponent: React.FC<PostCardProps> = ({
  authorName,
  authorAvatarUrl,
  content,
  timestamp,
}) => {
  return (
    <Card
      accessibilityRole="summary"
      accessibilityLabel={`Post by ${authorName} at ${timestamp}`}
    >
      <VStack space="$3">
        <HStack space="$3" alignItems="center">
          <ProfileAvatar
            name={authorName}
            avatarUrl={authorAvatarUrl}
            accessibilityLabel={`Avatar for ${authorName}`}
          />
          <VStack space="$1">
            <Text size="md" color="$textLight0" fontWeight="$semibold">
              {authorName}
            </Text>
            <Text size="sm" color="$textLight500">
              {timestamp}
            </Text>
          </VStack>
        </HStack>
        <Text size="md" color="$text0">
          {content}
        </Text>
      </VStack>
    </Card>
  );
};

export const PostCard = React.memo(PostCardComponent);

export default PostCard;
