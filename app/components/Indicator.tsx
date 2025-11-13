import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';

export interface IndicatorProps {
  value?: number | string;
  color?: string;
  textColor?: string;
  minWidth?: number;
  height?: number;
  fontSize?: '$xs' | '$sm' | '$md';
  fontWeight?: '$semibold' | '$bold';
  px?: '$1' | '$1.5' | '$2' | number;
}

export const Indicator: React.FC<IndicatorProps> = ({
  value,
  color = '#111828',
  textColor = '#FFFFFF',
  minWidth = 22,
  height = 22,
  fontSize = '$xs',
  fontWeight = '$semibold',
  px = '$2',
}) => {
  if (value === undefined || value === null || value === '' || Number(value) === 0) {
    return null;
  }

  return (
    <Box
      minWidth={minWidth}
      height={height}
      px={px}
      borderRadius={999}
      bg={color}
      alignItems="center"
      justifyContent="center"
    >
      <Text color={textColor} fontSize={fontSize} fontWeight={fontWeight}>
        {value}
      </Text>
    </Box>
  );
};

export default Indicator;
