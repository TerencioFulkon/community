import React from 'react';
import { HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { ProfileAvatar } from './ProfileAvatar';
import { PostItem } from 'app/types/feed';
import { Card } from './common/Card';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';

export interface PostCardProps extends PostItem {}

const PostCardComponent: React.FC<PostCardProps> = ({
  authorName,
  authorAvatarUrl,
  content,
  timestamp,
  likeCount,
  commentCount,
  shareCount,
}) => {
  return (
    <Card
      accessibilityRole="summary"
      accessibilityLabel={`Post by ${authorName} at ${timestamp}`}
    >
      <VStack space="sm">
        <HStack space="sm" alignItems="center">
          <ProfileAvatar
            name={authorName}
            avatarUrl={authorAvatarUrl}
            accessibilityLabel={`Avatar for ${authorName}`}
          />
          <VStack flex={1}>
            <CardTitleText>{authorName}</CardTitleText>
            <CardFootnoteText>{timestamp}</CardFootnoteText>
          </VStack>
        </HStack>
        <Text size="sm" color="$text0">
          {content}
        </Text>
        <HStack space="sm" alignItems="center" pt="$1">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Like ${authorName}'s post`}
            hitSlop={8}
          >
            <HStack space="sm" alignItems="center">
              <Heart size={18} color="#94A3B8" />
              <Text size="sm" color="$textLight500">
                {likeCount}
              </Text>
            </HStack>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Comment on ${authorName}'s post`}
            hitSlop={8}
          >
            <HStack space="sm" alignItems="center">
              <MessageCircle size={18} color="#94A3B8" />
              <Text size="sm" color="$textLight500">
                {commentCount}
              </Text>
            </HStack>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Share ${authorName}'s post`}
            hitSlop={8}
          >
            <HStack space="sm" alignItems="center">
              <Share2 size={18} color="#94A3B8" />
              <Text size="sm" color="$textLight500">
                {shareCount}
              </Text>
            </HStack>
          </Pressable>
        </HStack>
      </VStack>
    </Card>
  );
};

export const PostCard = React.memo(PostCardComponent);

export default PostCard;
