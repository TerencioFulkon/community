import React, { createContext, useContext } from 'react';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export interface CollapsibleHeaderContextValue {
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
}

const CollapsibleHeaderContext = createContext<CollapsibleHeaderContextValue>({});

export const CollapsibleHeaderProvider = CollapsibleHeaderContext.Provider;

export const useCollapsibleHeader = (): CollapsibleHeaderContextValue =>
  useContext(CollapsibleHeaderContext);

export default CollapsibleHeaderContext;
