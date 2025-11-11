import React from 'react';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { PageHeading } from 'app/components';

export const MessagesScreen: React.FC = () => {
  return (
    <Box flex={1} px="$6" py="$6" bg="$backgroundLight50">
      <VStack space="$3">
        <PageHeading>Messages</PageHeading>
        <Text size="md" color="$textLight500">
          Stay connected with one-on-one conversations and thoughtful check-ins.
        </Text>
      </VStack>
    </Box>
  );
};

export default MessagesScreen;

