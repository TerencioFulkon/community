import { useCallback, useEffect, useState } from 'react';
import { SpaceItem } from 'app/types/feed';

const MOCK_SPACES: SpaceItem[] = [
  {
    id: 'space-1',
    name: 'Sensory Soothers',
    description: 'Pass around weighted blanket hacks, stim toy reviews, and gentle playlists.',
    memberCount: 128,
  },
  {
    id: 'space-2',
    name: 'Executive Function Crew',
    description: 'Body-doubling rooms, reminder scripts, and calendar audits every Sunday.',
    memberCount: 94,
  },
  {
    id: 'space-3',
    name: 'Masked & Unmasked',
    description: 'Talk through identity, safety, and how we decompress after masking all day.',
    memberCount: 76,
  },
  {
    id: 'space-4',
    name: 'Low-Stim Socials',
    description: 'Plan museum mornings, swap café reviews, and find gentle hangout buddies.',
    memberCount: 112,
  },
  {
    id: 'space-5',
    name: 'Hyperfocus Lab',
    description: 'Share deep-dives, “info dump” threads, and celebrate special interests loudly.',
    memberCount: 67,
  },
  {
    id: 'space-6',
    name: 'Systems Test Kitchen',
    description: 'Experiment with planners, habit stacks, and automation without judgment.',
    memberCount: 83,
  },
];

export const useSpaces = () => {
  const [data, setData] = useState<SpaceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSpaces = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setData(MOCK_SPACES);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSpaces();
  }, [fetchSpaces]);

  const refresh = useCallback(() => {
    fetchSpaces();
  }, [fetchSpaces]);

  const loadMore = useCallback(async () => {
    // Pagination placeholder
  }, []);

  return { data, isLoading, error, refresh, loadMore };
};

export default useSpaces;
