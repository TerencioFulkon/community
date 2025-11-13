import React from 'react';
import { HStack, Pressable, Text } from '@gluestack-ui/themed';
import { MessageCircle, Share2, ArrowBigUp, ArrowBigDown } from 'lucide-react-native';

type ActionKey = 'upvote' | 'downvote' | 'comment' | 'share';

export interface PostEngagementBarProps {
  authorName: string;
  commentCount: number;
  shareCount: number;
  upvoteCount: number;
  downvoteCount: number;
  onActionPress?: (action: ActionKey) => void;
  activeActions?: Partial<Record<ActionKey, boolean>>;
}

const ACTION_CONFIG = {
  upvote: {
    icon: ArrowBigUp,
    label: (author: string) => `Upvote ${author}'s post`,
    size: 26,
  },
  downvote: {
    icon: ArrowBigDown,
    label: (author: string) => `Downvote ${author}'s post`,
    size: 26,
  },
  comment: {
    icon: MessageCircle,
    label: (author: string) => `Comment on ${author}'s post`,
    size: 22,
  },
  share: {
    icon: Share2,
    label: (author: string) => `Share ${author}'s post`,
    size: 22,
  },
} as const;

export const PostEngagementBar: React.FC<PostEngagementBarProps> = ({
  authorName,
  upvoteCount,
  downvoteCount,
  commentCount,
  shareCount,
  onActionPress,
  activeActions,
}) => {
  const defaultStrokeColor = '#111828';
  const counts: Record<ActionKey, number> = {
    upvote: upvoteCount,
    downvote: downvoteCount,
    comment: commentCount,
    share: shareCount,
  };

  return (
    <HStack space="4xl" alignItems="center" pt="$1">
      {(Object.keys(ACTION_CONFIG) as ActionKey[]).map((actionKey) => {
        const action = ACTION_CONFIG[actionKey];
        const IconComponent = action.icon;
        const isActive = Boolean(activeActions?.[actionKey]);
        let strokeColor = defaultStrokeColor;
        let iconFill = 'none';

        if (actionKey === 'upvote') {
          strokeColor = isActive ? '#22c55e' : defaultStrokeColor;
          iconFill = isActive ? '#22c55e' : 'none';
        } else if (actionKey === 'downvote') {
          strokeColor = isActive ? '#EA4335' : defaultStrokeColor;
          iconFill = isActive ? '#EA4335' : 'none';
        }

        return (
          <Pressable
            key={actionKey}
            accessibilityRole="button"
            accessibilityLabel={action.label(authorName)}
            hitSlop={8}
            onPress={() => onActionPress?.(actionKey)}
          >
            <HStack space="xs" alignItems="center">
              <IconComponent
                size={action.size}
                color={strokeColor}
                strokeWidth={1.6}
                fill={iconFill}
                accessibilityElementsHidden
                importantForAccessibility="no"
              />
              <Text size="xs" color={isActive ? '$text0' : '$text0'}>
                {counts[actionKey]}
              </Text>
            </HStack>
          </Pressable>
        );
      })}
    </HStack>
  );
};

export default PostEngagementBar;
