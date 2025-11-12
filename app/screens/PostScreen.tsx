import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { ScreenContainer } from 'app/layouts';
import { ScreenProps } from './types';

export const PostScreen: React.FC<ScreenProps> = ({ activeTab, onTabPress }) => (
  <ScreenContainer title="Post" activeTab={activeTab} onTabPress={onTabPress}>
    <Box
      flex={1}
      bg="$backgroundLight50"
      borderWidth="$1"
      borderColor="$backgroundLight200"
      rounded="$lg"
      px="$5"
      py="$6"
      alignItems="center"
      justifyContent="center"
    >
      <Text size="md" color="$textLight400" textAlign="center">
        Post creation UI coming soon.
      </Text>
    </Box>
  </ScreenContainer>
);

export default PostScreen;
