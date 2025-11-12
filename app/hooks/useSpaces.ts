import { useCallback, useState } from 'react';
import { SpaceItem } from 'app/types/feed';

const MOCK_SPACES: SpaceItem[] = [
  {
    id: 'space-1',
    name: 'Sensory Soothers',
    description: 'Pass around weighted blanket hacks, stim toy reviews, and gentle playlists.',
    memberCount: 128,
    iconUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'space-2',
    name: 'Executive Function Crew',
    description: 'Body-doubling rooms, reminder scripts, and calendar audits every Sunday.',
    memberCount: 94,
    iconUrl: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'space-3',
    name: 'Masked & Unmasked',
    description: 'Talk through identity, safety, and how we decompress after masking all day.',
    memberCount: 76,
    iconUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'space-4',
    name: 'Low-Stim Socials',
    description: 'Plan museum mornings, swap café reviews, and find gentle hangout buddies.',
    memberCount: 112,
    iconUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'space-5',
    name: 'Hyperfocus Lab',
    description: 'Share deep-dives, “info dump” threads, and celebrate special interests loudly.',
    memberCount: 67,
    iconUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'space-6',
    name: 'Systems Test Kitchen',
    description: 'Experiment with planners, habit stacks, and automation without judgment.',
    memberCount: 83,
    iconUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export const useSpaces = () => {
  const [data, setData] = useState<SpaceItem[]>(MOCK_SPACES);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchSpaces = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setData(MOCK_SPACES);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refresh = useCallback(() => {
    fetchSpaces();
  }, [fetchSpaces]);

  const loadMore = useCallback(async () => {
    // Pagination placeholder
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default useSpaces;
