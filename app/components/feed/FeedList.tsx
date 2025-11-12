import React, { memo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';

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

const CARD_SPACING = '$4';

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
  const Separator = React.useCallback(() => <Box h={CARD_SPACING} />, []);

  const shouldShowFooter = !!onEndReached && data.length > 0;

  return (
    <Box flex={1} alignItems="center">
      <Box w="$full">
        <FlatList<T>
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          ListEmptyComponent={ListEmptyComponent ?? DEFAULT_EMPTY}
          ListFooterComponent={
            shouldShowFooter ? ListFooterComponent ?? DEFAULT_FOOTER : null
          }
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};

export const FeedList = memo(FeedListComponent) as typeof FeedListComponent;

export default FeedList;
