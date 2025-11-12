import React from 'react';
import { Box } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export type CardProps = ComponentProps<typeof Box>;

export const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <Box
    bg="$backgroundLight0"
    borderBottomWidth="$1"
    borderBottomColor="$backgroundLight100"
    px="$5"
    py="$5"
    rounded="$none"
    {...props}
  >
    {children}
  </Box>
);

export default Card;
