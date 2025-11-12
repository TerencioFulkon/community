import React, { useCallback } from 'react';
import { FeedList, PostCard } from 'app/components';
import { usePosts } from 'app/hooks';
import { ScreenContainer } from 'app/layouts';
import { PostItem } from 'app/types/feed';
import { ScreenProps } from './types';

export const HomeScreen: React.FC<ScreenProps> = ({ activeTab, onTabPress }) => {
  const { data, isLoading, refresh, loadMore } = usePosts();

  const renderItem = useCallback(({ item }: { item: PostItem }) => <PostCard {...item} />, []);
  const keyExtractor = useCallback((item: PostItem) => item.id, []);

  return (
    <ScreenContainer title="Home" activeTab={activeTab} onTabPress={onTabPress}>
      <FeedList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={refresh}
        onEndReached={loadMore}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;

