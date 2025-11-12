import React, { useCallback } from 'react';
import { FeedList, MessageCard } from 'app/components';
import { useMessages } from 'app/hooks';
import { ScreenContainer } from 'app/layouts';
import { MessageItem } from 'app/types/feed';
import { ScreenProps } from './types';

export const MessagesScreen: React.FC<ScreenProps> = ({ activeTab, onTabPress }) => {
  const { data, isLoading, refresh, loadMore } = useMessages();

  const renderItem = useCallback(
    ({ item }: { item: MessageItem }) => <MessageCard {...item} />,
    []
  );
  const keyExtractor = useCallback((item: MessageItem) => item.id, []);

  return (
    <ScreenContainer title="Messages" activeTab={activeTab} onTabPress={onTabPress}>
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

export default MessagesScreen;

