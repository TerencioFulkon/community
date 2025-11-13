import React from 'react';
import { Button, ButtonText } from '@gluestack-ui/themed';

export interface JoinButtonProps {
  isJoined: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
  labelJoined?: string;
  labelJoin?: string;
}

export const JoinButton: React.FC<JoinButtonProps> = ({
  isJoined,
  onPress,
  accessibilityLabel,
  labelJoined = 'Joined',
  labelJoin = 'Join',
}) => (
  <Button
    size="xs"
    variant={isJoined ? 'outline' : 'solid'}
    action={isJoined ? 'secondary' : 'primary'}
    onPress={onPress}
    px="$3"
    py="$1"
    accessibilityRole="button"
    accessibilityLabel={
      accessibilityLabel ?? `${isJoined ? 'Leave' : 'Join'} space`
    }
    bg={!isJoined ? '#111828' : undefined}
    borderColor={!isJoined ? '#111828' : undefined}
  >
    <ButtonText>{isJoined ? labelJoined : labelJoin}</ButtonText>
  </Button>
);

export default JoinButton;
