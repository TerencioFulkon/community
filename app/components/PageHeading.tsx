import React from 'react';
import { Heading } from '@gluestack-ui/themed';

export interface PageHeadingProps {
  children: React.ReactNode;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ children }) => (
  <Heading size="xl" color="$text0">
    {children}
  </Heading>
);

export default PageHeading;

