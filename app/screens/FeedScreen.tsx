import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, ScrollView, VStack, useToken } from '@gluestack-ui/themed';
import { PostCard } from 'app/components';
import { Header, BottomNav } from 'app/layouts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const mockFeed = [
  {
    id: '1',
    authorName: 'Alex Chen',
    authorInitials: 'AC',
    timeAgo: '2h ago',
    content:
      'Finally found noise-canceling headphones that work for me! The grocery store is so much less overwhelming now. Small wins matter 🧠',
    likeCount: 24,
    commentCount: 5,
    shareCount: 3,
  },
  {
    id: '2',
    authorName: 'Sam Rivera',
    authorInitials: 'SR',
    timeAgo: '4h ago',
    content:
      'Anyone else hyperfocus so hard that you forget to eat? Realized I’ve been coding for 6 hours straight 😅',
    likeCount: 18,
    commentCount: 3,
    shareCount: 0,
  },
];

const toNumber = (value: number | string | undefined): number =>
  typeof value === 'number' ? value : parseFloat(value ?? '0');

export const FeedScreen: React.FC = () => {
  const spaceToken = useToken('space', '5');
  const paddingValue = toNumber(spaceToken);
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const bottomSpace = paddingValue + Math.max(insets.bottom, 12) + 72;
  const isCompact = width < 768;

  const contentContainerStyle = useMemo(
    () => ({
      paddingHorizontal: isCompact ? 0 : paddingValue,
      paddingTop: paddingValue,
      paddingBottom: bottomSpace,
    }),
    [bottomSpace, isCompact, paddingValue]
  );

  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header />
      <ScrollView contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
        <Box
          w="$full"
          alignSelf={isCompact ? undefined : 'center'}
          maxWidth={isCompact ? undefined : 680}
          px={isCompact ? '$5' : '0'}
        >
          <VStack space="$5">
            {mockFeed.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </VStack>
        </Box>
      </ScrollView>
      <BottomNav activeKey="home" />
    </Box>
  );
};

export default FeedScreen;
