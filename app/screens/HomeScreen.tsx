import React from 'react';
import { Box, Heading, Text, VStack } from '@gluestack-ui/themed';
import { Header } from 'app/layouts';

export const HomeScreen: React.FC = () => {
  return (
    <Box flex={1} bg="$backgroundLight50">
      <Header title="Home" userName="Terry Daine" />
      <Box flex={1} px="$6" py="$8" justifyContent="center">
        <VStack space="$3" alignItems="center">
          <Heading size="xl" color="$textLight0" textAlign="center">
            Neurodivergent Community
          </Heading>
          <Text size="md" color="$textLight500" textAlign="center">
            This is a fresh workspace. Start adding screens and components when you&apos;re ready.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomeScreen;

