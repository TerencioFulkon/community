import React, { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Box, VStack, useToken } from '@gluestack-ui/themed';
import { Header } from 'app/components/Header';
import { PostCard } from 'app/components/PostCard';

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

const styles = StyleSheet.create({
  feedContent: {
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
  },
});

const resolveSpacing = (tokenValue: number | string | undefined): number =>
  typeof tokenValue === 'number' ? tokenValue : parseFloat(tokenValue ?? '0');

export const FeedScreen: React.FC = () => {
  const paddingValue = resolveSpacing(useToken('space', '5'));

  const contentContainerStyle = useMemo(
    () => ({
      paddingHorizontal: paddingValue,
      paddingVertical: paddingValue,
    }),
    [paddingValue]
  );

  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header />
      <ScrollView contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
        <Box style={styles.feedContent}>
          <VStack space="4">
            {mockFeed.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default FeedScreen;

