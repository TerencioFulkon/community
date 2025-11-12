import React, { memo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { useCollapsibleHeader } from 'app/contexts/CollapsibleHeaderContext';

export interface FeedListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  ListEmptyComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement | null;
}

const DEFAULT_EMPTY = (
  <Box px="$6" py="$10" alignItems="center">
    <Text size="sm" color="$textLight400">
      Nothing here yet. Check back soon.
    </Text>
  </Box>
);

const DEFAULT_FOOTER = null;

const FeedListComponent = <T,>({
  data,
  renderItem,
  keyExtractor,
  refreshing = false,
  onRefresh,
  onEndReached,
  ListEmptyComponent,
  ListFooterComponent = null,
}: FeedListProps<T>) => {
  const shouldShowFooter = !!onEndReached && data.length > 0;
  const { onScroll, scrollEventThrottle } = useCollapsibleHeader();

  return (
    <Box flex={1} alignItems="center">
      <Box w="$full" flex={1}>
        <FlatList<T>
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={undefined}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onScroll={onScroll}
          scrollEventThrottle={onScroll ? scrollEventThrottle ?? 16 : undefined}
          ListEmptyComponent={ListEmptyComponent ?? DEFAULT_EMPTY}
          ListFooterComponent={
            shouldShowFooter ? ListFooterComponent ?? DEFAULT_FOOTER : null
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </Box>
    </Box>
  );
};

export const FeedList = memo(FeedListComponent) as typeof FeedListComponent;

export default FeedList;
