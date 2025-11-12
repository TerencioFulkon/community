import { useCallback, useEffect, useState } from 'react';
import { PostItem } from 'app/types/feed';

const MOCK_POSTS: PostItem[] = [
  {
    id: 'post-1',
    authorName: 'Alex Chen',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=160&h=160&q=80',
    content:
      'Shared a low-stim “pause ritual” I use before meetings: chew ginger candy, 5-count breathing, and a weighted scarf. It grounded me again today—passing it on. 💙',
    timestamp: '2h ago',
  },
  {
    id: 'post-2',
    authorName: 'Morgan Lee',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=160&h=160&q=80',
    content:
      'Sensory win: swapped my desk lamp for a sunrise bulb and my headaches dropped instantly. Lighting is underrated co-regulation.',
    timestamp: '4h ago',
  },
  {
    id: 'post-3',
    authorName: 'Zara Finch',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1544723795-43253785f8e6?auto=format&fit=facearea&w=160&h=160&q=80',
    content:
      'Hyperfocus journal entry: spent three hours designing a stimming-friendly keychain. Posting the template if anyone else wants to fidget in peace.',
    timestamp: '6h ago',
  },
];

export const usePosts = () => {
  const [data, setData] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Placeholder for Supabase call
      await new Promise((resolve) => setTimeout(resolve, 400));
      setData(MOCK_POSTS);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const refresh = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);

  const loadMore = useCallback(async () => {
    // Placeholder for pagination logic
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default usePosts;
