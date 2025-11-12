import React, { useCallback } from 'react';
import { FeedList, NotificationCard } from 'app/components';
import { useNotifications } from 'app/hooks';
import { ScreenContainer } from 'app/layouts';
import { NotificationItem } from 'app/types/feed';
import { ScreenProps } from './types';

export const NotificationsScreen: React.FC<ScreenProps> = ({ activeTab, onTabPress }) => {
  const { data, isLoading, refresh, loadMore } = useNotifications();

  const renderItem = useCallback(
    ({ item }: { item: NotificationItem }) => <NotificationCard {...item} />,
    []
  );
  const keyExtractor = useCallback((item: NotificationItem) => item.id, []);

  return (
    <ScreenContainer
      title="Notifications"
      activeTab={activeTab}
      onTabPress={onTabPress}
    >
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

export default NotificationsScreen;

