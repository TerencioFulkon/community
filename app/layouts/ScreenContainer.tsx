import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import Header from './Header';
import TabBar, { TabBarProps, TabKey } from './TabBar';
import { CollapsibleHeaderProvider } from 'app/contexts/CollapsibleHeaderContext';

export interface ScreenContainerProps {
  title: string;
  activeTab: TabKey;
  onTabPress: TabBarProps['onTabPress'];
  children: React.ReactNode;
  avatarUrl?: string;
  userName?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  title,
  activeTab,
  onTabPress,
  children,
  avatarUrl,
  userName = 'Terry Daine',
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerHeight, setHeaderHeight] = useState(96);
  const clampedScroll = useMemo(
    () => Animated.diffClamp(scrollY, 0, headerHeight),
    [scrollY, headerHeight]
  );

  const headerTranslateY = clampedScroll.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });
  const contentPaddingTop = Animated.subtract(headerHeight, clampedScroll);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = Math.max(0, event.nativeEvent.contentOffset.y || 0);
      scrollY.setValue(y);
    },
    [scrollY]
  );

  const AnimatedBox = useMemo(() => Animated.createAnimatedComponent(Box), []);

  return (
    <CollapsibleHeaderProvider value={{ onScroll: handleScroll, scrollEventThrottle: 16 }}>
      <Box flex={1} bg="$backgroundLight50">
        <AnimatedBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          style={{
            transform: [{ translateY: headerTranslateY }],
            zIndex: 10,
            elevation: 10,
          }}
          onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)}
        >
          <Header title={title} userName={userName} avatarUrl={avatarUrl} />
        </AnimatedBox>
        <AnimatedBox flex={1} style={{ paddingTop: contentPaddingTop }}>
          {children}
        </AnimatedBox>
        <TabBar activeKey={activeTab} onTabPress={onTabPress} />
      </Box>
    </CollapsibleHeaderProvider>
  );
};

export default ScreenContainer;
