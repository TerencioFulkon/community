import React from 'react';
import { Text, VStack } from '@gluestack-ui/themed';
import { NotificationItem } from 'app/types/feed';
import { Card } from './common/Card';
import { CardTitleText } from './common/CardTitleText';
import { CardFootnoteText } from './common/CardFootnoteText';

export interface NotificationCardProps extends NotificationItem {}

const NotificationCardComponent: React.FC<NotificationCardProps> = ({
  title,
  description,
  timestamp,
}) => (
  <Card
    accessibilityRole="summary"
    accessibilityLabel={`Notification: ${title} at ${timestamp}`}
  >
    <VStack space="sm">
      <CardTitleText>{title}</CardTitleText>
      <Text size="sm" color="$textLight500">
        {description}
      </Text>
      <CardFootnoteText>{timestamp}</CardFootnoteText>
    </VStack>
  </Card>
);

export const NotificationCard = React.memo(NotificationCardComponent);

export default NotificationCard;
