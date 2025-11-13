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
  commentCount,
  shareCount,
  upvoteCount,
  downvoteCount,
  isUpvoted,
  isDownvoted,
  hasCommented,
  hasShared,
}) => {
  const [isUpvotedState, setIsUpvotedState] = useState(Boolean(isUpvoted));
  const [isDownvotedState, setIsDownvotedState] = useState(Boolean(isDownvoted));
  const [upvoteCountState, setUpvoteCountState] = useState(upvoteCount);
  const [downvoteCountState, setDownvoteCountState] = useState(downvoteCount);

  const handleActionPress = (action: 'upvote' | 'downvote' | 'comment' | 'share') => {
    if (action === 'upvote') {
      setIsUpvotedState((prev) => {
        const next = !prev;
        setUpvoteCountState((count) => Math.max(0, count + (next ? 1 : -1)));
        if (next && isDownvotedState) {
          setIsDownvotedState(false);
          setDownvoteCountState((count) => Math.max(0, count - 1));
        }
        return next;
      });
    } else if (action === 'downvote') {
      setIsDownvotedState((prev) => {
        const next = !prev;
        setDownvoteCountState((count) => Math.max(0, count + (next ? 1 : -1)));
        if (next && isUpvotedState) {
          setIsUpvotedState(false);
          setUpvoteCountState((count) => Math.max(0, count - 1));
        }
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
          upvoteCount={upvoteCountState}
          downvoteCount={downvoteCountState}
          commentCount={commentCount}
          shareCount={shareCount}
          activeActions={{
            upvote: isUpvotedState,
            downvote: isDownvotedState,
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
