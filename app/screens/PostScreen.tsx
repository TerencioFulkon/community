import React from 'react';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { PageHeading } from 'app/components';

export const PostScreen: React.FC = () => {
  return (
    <Box flex={1} px="$6" py="$6" bg="$backgroundLight50">
      <VStack space="$3">
        <PageHeading>Create a Post</PageHeading>
        <Text size="md" color="$textLight500">
          Capture supportive thoughts, questions, or resources to share with the community.
        </Text>
      </VStack>
    </Box>
  );
};

export default PostScreen;

