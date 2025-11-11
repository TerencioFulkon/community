import React from 'react';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { PageHeading } from 'app/components';

export const NotificationsScreen: React.FC = () => {
  return (
    <Box flex={1} px="$6" py="$6" bg="$backgroundLight50">
      <VStack space="$3">
        <PageHeading>Notifications</PageHeading>
        <Text size="md" color="$textLight500">
          Review gentle alerts about new posts, replies, and community updates here.
        </Text>
      </VStack>
    </Box>
  );
};

export default NotificationsScreen;

