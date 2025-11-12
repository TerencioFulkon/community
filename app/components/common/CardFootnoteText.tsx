import React from 'react';
import { Text } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export type CardFootnoteTextProps = ComponentProps<typeof Text>;

export const CardFootnoteText: React.FC<CardFootnoteTextProps> = (props) => (
  <Text size="xs" color="$textLight500" {...props} />
);

export default CardFootnoteText;
