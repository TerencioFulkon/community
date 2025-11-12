import React, { useCallback } from 'react';
import { FeedList, SpaceCard } from 'app/components';
import { useSpaces } from 'app/hooks';
import { ScreenContainer } from 'app/layouts';
import { SpaceItem } from 'app/types/feed';
import { ScreenProps } from './types';

export const SpacesScreen: React.FC<ScreenProps> = ({ activeTab, onTabPress }) => {
  const { data, isLoading, refresh, loadMore } = useSpaces();

  const renderItem = useCallback(({ item }: { item: SpaceItem }) => <SpaceCard {...item} />, []);
  const keyExtractor = useCallback((item: SpaceItem) => item.id, []);

  return (
    <ScreenContainer title="Spaces" activeTab={activeTab} onTabPress={onTabPress}>
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

export default SpacesScreen;

