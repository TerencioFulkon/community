import { useCallback, useRef, useState } from 'react';
import { NotificationItem } from 'app/types/feed';

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notification-1',
    title: 'Morgan replied to your post',
    description: '“Loved your breathing exercise share—dropping my ocean-sound mix in there.”',
    timestamp: '10m ago',
    actorName: 'Morgan Lee',
    actorAvatarUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=160&h=160&q=80',
    unreadMessageCount: 2,
    isUnread: true,
  },
  {
    id: 'notification-2',
    title: 'New body-doubling session',
    description: 'Executive Function Crew opened a “gentle admin” hour for tomorrow.',
    timestamp: '1h ago',
    spaceName: 'Executive Function Crew',
    spaceIconUrl:
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=200&h=200&q=80',
    isUnread: true,
  },
  {
    id: 'notification-3',
    title: 'Sensory Soothers milestone',
    description: 'The space hit 150 members. You unlocked a “Comfort Curator” badge.',
    timestamp: '3h ago',
    spaceName: 'Sensory Soothers',
    spaceIconUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=200&h=200&q=80',
    isUnread: false,
  },
  {
    id: 'notification-4',
    title: 'Quiet timer sent',
    description: 'Theo shared a 25/5 focus timer script with you in Hyperfocus Lab.',
    timestamp: '5h ago',
    actorName: 'Theo Alvarez',
    actorAvatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=160&h=160&q=80',
    unreadMessageCount: 4,
    isUnread: true,
  },
  {
    id: 'notification-5',
    title: 'Masking check-in',
    description: 'Masked & Unmasked posted “What helps you decompress?” and mentioned you.',
    timestamp: 'Yesterday',
    spaceName: 'Masked & Unmasked',
    spaceIconUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200&q=80',
    isUnread: false,
  },
  {
    id: 'notification-6',
    title: 'New saved resource',
    description: '“Sensory Pause Ritual” was bookmarked by 23 members this morning.',
    timestamp: '2d ago',
    actorName: 'Alex Chen',
    actorAvatarUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=160&h=160&q=80',
    unreadMessageCount: 1,
    isUnread: false,
  },
];

export const useNotifications = () => {
  const [data, setData] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const pageRef = useRef(1);

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
    pageRef.current = 1;
    setData(MOCK_NOTIFICATIONS);
    fetchNotifications();
  }, [fetchNotifications]);

  const loadMore = useCallback(async () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    await new Promise((resolve) => setTimeout(resolve, 150));
    const nextPage = pageRef.current + 1;
    const nextItems = MOCK_NOTIFICATIONS.map((item, index) => ({
      ...item,
      id: `${item.id}-page-${nextPage}-${index}`,
    }));
    setData((prev) => [...prev, ...nextItems]);
    pageRef.current = nextPage;
    setIsLoadingMore(false);
  }, [isLoadingMore]);

  return { data, isLoading, error, refresh, loadMore };
};

export default useNotifications;
