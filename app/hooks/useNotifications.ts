import { useCallback, useState } from 'react';
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
  {
    id: 'notification-4',
    title: 'Quiet timer sent',
    description: 'Theo shared a 25/5 focus timer script with you in Hyperfocus Lab.',
    timestamp: '5h ago',
  },
  {
    id: 'notification-5',
    title: 'Masking check-in',
    description: 'Masked & Unmasked posted “What helps you decompress?” and mentioned you.',
    timestamp: 'Yesterday',
  },
  {
    id: 'notification-6',
    title: 'New saved resource',
    description: '“Sensory Pause Ritual” was bookmarked by 23 members this morning.',
    timestamp: '2d ago',
  },
];

export const useNotifications = () => {
  const [data, setData] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setData(MOCK_NOTIFICATIONS);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refresh = useCallback(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const loadMore = useCallback(async () => {
    // Pagination placeholder
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default useNotifications;
