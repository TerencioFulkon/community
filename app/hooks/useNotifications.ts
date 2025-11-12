import { useCallback, useEffect, useState } from 'react';
import { NotificationItem } from 'app/types/feed';

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notification-1',
    title: 'Morgan replied to your post',
    description: '“Loved your breathing exercise share—dropping my ocean-sound mix in there.”',
    timestamp: '10m ago',
  },
  {
    id: 'notification-2',
    title: 'New body-doubling session',
    description: 'Executive Function Crew opened a “gentle admin” hour for tomorrow.',
    timestamp: '1h ago',
  },
  {
    id: 'notification-3',
    title: 'Sensory Soothers milestone',
    description: 'The space hit 150 members. You unlocked a “Comfort Curator” badge.',
    timestamp: '3h ago',
  },
];

export const useNotifications = () => {
  const [data, setData] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setData(MOCK_NOTIFICATIONS);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const refresh = useCallback(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const loadMore = useCallback(async () => {
    // Pagination placeholder
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default useNotifications;
