import React from 'react';
import { Box, BoxProps, useToken } from '@gluestack-ui/themed';

export type CardProps = BoxProps;

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const shadowColor = useToken('colors', 'shadowColor') as string;

  return (
    <Box
      bg="$backgroundLight0"
      borderBottomWidth="$1"
      borderBottomColor="$backgroundLight200"
      borderTopWidth="0"
      borderLeftWidth="0"
      borderRightWidth="0"
      px="$5"
      py="$5"
      rounded="none"
      style={{
        shadowColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
