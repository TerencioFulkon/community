import React from 'react';
import { Box } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export type CardProps = ComponentProps<typeof Box>;

export const Card: React.FC<CardProps> = ({ children, bg: bgProp, ...props }) => {
  const backgroundColor = bgProp ?? '$backgroundLight0';

  return (
    <Box
      bg={backgroundColor}
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
};

export default Card;
