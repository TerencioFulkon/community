import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react-native';

export interface PostCardProps {
  id: string;
  authorName: string;
  timeAgo: string;
  content: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  avatarUrl?: string;
  authorInitials?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  authorName,
  timeAgo,
  content,
  likeCount,
  commentCount,
  shareCount,
  avatarUrl,
  authorInitials = 'NC',
}) => {
  return (
    <Box
      bg="$backgroundLight0"
      borderWidth="$1"
      borderColor="$backgroundLight300"
      px="$5"
      py="$5"
      rounded="$lg"
      accessibilityRole="article"
      accessibilityLabel={`Post by ${authorName} from ${timeAgo}`}
    >
      <VStack space="4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack space="3" alignItems="center">
            <Avatar size="md" bg="$backgroundLight100">
              {avatarUrl ? <AvatarImage source={{ uri: avatarUrl }} /> : null}
              <AvatarFallback bg="$backgroundLight100">
                <AvatarFallbackText color="$textLight0">
                  {authorInitials}
                </AvatarFallbackText>
              </AvatarFallback>
            </Avatar>
            <VStack space="1">
              <Text size="md" color="$textLight0" fontWeight="$semibold">
                {authorName}
              </Text>
              <Text size="sm" color="$textLight500">
                {timeAgo}
              </Text>
            </VStack>
          </HStack>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`More options for ${authorName}`}
            hitSlop={12}
          >
            <Icon as={MoreHorizontal} size="sm" color="$textLight500" />
          </Pressable>
        </HStack>

        <Text size="md" color="$textLight200" lineHeight="$lg">
          {content}
        </Text>

        <Divider bg="$backgroundLight300" />

        <HStack space="6" alignItems="center">
          <Pressable
            accessibilityLabel={`Like ${authorName}'s post`}
            accessibilityRole="button"
            hitSlop={8}
          >
            <HStack alignItems="center" space="2">
              <Icon as={Heart} size="sm" color="$textLight500" />
              <Text size="sm" color="$textLight500">
                {likeCount}
              </Text>
            </HStack>
          </Pressable>
          <Pressable
            accessibilityLabel={`Comment on ${authorName}'s post`}
            accessibilityRole="button"
            hitSlop={8}
          >
            <HStack alignItems="center" space="2">
              <Icon as={MessageCircle} size="sm" color="$textLight500" />
              <Text size="sm" color="$textLight500">
                {commentCount}
              </Text>
            </HStack>
          </Pressable>
          <Pressable
            accessibilityLabel={`Share ${authorName}'s post`}
            accessibilityRole="button"
            hitSlop={8}
          >
            <HStack alignItems="center" space="2">
              <Icon as={Share2} size="sm" color="$textLight500" />
              <Text size="sm" color="$textLight500">
                {shareCount}
              </Text>
            </HStack>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostCard;
