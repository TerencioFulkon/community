import React from 'react';
import { HStack, Pressable, Text } from '@gluestack-ui/themed';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

type ActionKey = 'like' | 'comment' | 'share';

export interface PostEngagementBarProps {
  authorName: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  onActionPress?: (action: ActionKey) => void;
  activeActions?: Partial<Record<ActionKey, boolean>>;
}

const ACTION_CONFIG = {
  like: {
    icon: Heart,
    label: (author: string) => `Like ${author}'s post`,
  },
  comment: {
    icon: MessageCircle,
    label: (author: string) => `Comment on ${author}'s post`,
  },
  share: {
    icon: Share2,
    label: (author: string) => `Share ${author}'s post`,
  },
} as const;

export const PostEngagementBar: React.FC<PostEngagementBarProps> = ({
  authorName,
  likeCount,
  commentCount,
  shareCount,
  onActionPress,
  activeActions,
}) => {
  const defaultStrokeColor = '#111828';
  const heartActiveColor = '#DC2626';
  const counts: Record<ActionKey, number> = {
    like: likeCount,
    comment: commentCount,
    share: shareCount,
  };

  return (
    <HStack space="lg" alignItems="center" pt="$1">
      {(Object.keys(ACTION_CONFIG) as ActionKey[]).map((actionKey) => {
        const action = ACTION_CONFIG[actionKey];
        const IconComponent = action.icon;
        const isActive = Boolean(activeActions?.[actionKey]);
        const strokeColor =
          actionKey === 'like' && isActive ? heartActiveColor : defaultStrokeColor;
        const iconFill =
          actionKey === 'like' && isActive ? heartActiveColor : 'none';

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
                size={22}
                color={strokeColor}
                strokeWidth={1.6}
                fill={iconFill}
                accessibilityElementsHidden
                importantForAccessibility="no"
              />
              <Text size="sm" color={isActive ? '$text0' : '$text0'}>
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
