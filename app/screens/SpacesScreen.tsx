import React from 'react';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { PageHeading } from 'app/components';

export const SpacesScreen: React.FC = () => {
  return (
    <Box flex={1} px="$6" py="$6" bg="$backgroundLight50">
      <VStack space="$3">
        <PageHeading>Spaces</PageHeading>
        <Text size="md" color="$textLight500">
          Curate calming spaces and shared resources for the community here.
        </Text>
      </VStack>
    </Box>
  );
};

export default SpacesScreen;

