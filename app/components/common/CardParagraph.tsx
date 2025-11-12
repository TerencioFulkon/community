import React from 'react';
import { Text } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export type CardParagraphProps = ComponentProps<typeof Text>;

export const CardParagraph: React.FC<CardParagraphProps> = (props) => (
  <Text size="sm" color="$textLight500" {...props} />
);

export default CardParagraph;
