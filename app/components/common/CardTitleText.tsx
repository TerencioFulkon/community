import React from 'react';
import { Text } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

export type CardTitleTextProps = ComponentProps<typeof Text>;

export const CardTitleText: React.FC<CardTitleTextProps> = (props) => (
  <Text size="md" color="$text0" fontWeight="$semibold" {...props} />
);

export default CardTitleText;
