import { useCallback, useEffect, useState } from 'react';
import { MessageItem } from 'app/types/feed';

const MOCK_MESSAGES: MessageItem[] = [
  {
    id: 'message-1',
    senderName: 'Kai Jordan',
    senderAvatarUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=160&h=160&q=80',
    preview:
      'Appreciated your sensory thread. Want to pair up for a quiet co-working sprint later today?',
    timestamp: '3m ago',
  },
  {
    id: 'message-2',
    senderName: 'Jamie Patel',
    senderAvatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=160&h=160&q=80',
    preview:
      'Thanks for joining yesterday’s body-doubling session—how did the task batching feel?',
    timestamp: '45m ago',
  },
  {
    id: 'message-3',
    senderName: 'Riley Brooks',
    senderAvatarUrl:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=facearea&w=160&h=160&q=80',
    preview:
      'I loved your post about hyperfocus recovery snacks. Could you share the chia pudding recipe?',
    timestamp: '2h ago',
  },
];

export const useMessages = () => {
  const [data, setData] = useState<MessageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setData(MOCK_MESSAGES);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const refresh = useCallback(() => {
    fetchMessages();
  }, [fetchMessages]);

  const loadMore = useCallback(async () => {
    // Pagination placeholder
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default useMessages;
