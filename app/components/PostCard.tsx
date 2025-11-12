import React, { useState } from 'react';
import { Box, HStack, VStack } from '@gluestack-ui/themed';
import { ProfileAvatar } from './ProfileAvatar';
import { PostItem } from 'app/types/feed';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';
import { PostEngagementBar } from './PostEngagementBar';
import { CardParagraph } from './common/CardParagraph';

export interface PostCardProps extends PostItem {}

const PostCardComponent: React.FC<PostCardProps> = ({
  authorName,
  authorAvatarUrl,
  content,
  timestamp,
  likeCount,
  commentCount,
  shareCount,
  isLiked,
  hasCommented,
  hasShared,
}) => {
  const [isLikedState, setIsLikedState] = useState(Boolean(isLiked));
  const [likeCountState, setLikeCountState] = useState(likeCount);

  const handleActionPress = (action: 'like' | 'comment' | 'share') => {
    if (action === 'like') {
      setIsLikedState((prev) => {
        const next = !prev;
        setLikeCountState((count) => Math.max(0, count + (next ? 1 : -1)));
        return next;
      });
    }
  };
  return (
    <Card
      accessibilityRole="summary"
      accessibilityLabel={`Post by ${authorName} at ${timestamp}`}
    >
      <VStack space="md">
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
        <CardParagraph>{content}</CardParagraph>
        <PostEngagementBar
          authorName={authorName}
          likeCount={likeCountState}
          commentCount={commentCount}
          shareCount={shareCount}
          activeActions={{
            like: isLikedState,
            comment: hasCommented,
            share: hasShared,
          }}
          onActionPress={handleActionPress}
        />
      </VStack>
    </Card>
  );
};

export const PostCard = React.memo(PostCardComponent);

export default PostCard;
