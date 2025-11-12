import React from 'react';
import { Text, VStack } from '@gluestack-ui/themed';
import { NotificationItem } from 'app/types/feed';
import { Card } from './common/Card';

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
    <VStack space="$2">
      <Text size="md" fontWeight="$semibold" color="$textLight0">
        {title}
      </Text>
      <Text size="sm" color="$textLight500">
        {description}
      </Text>
      <Text size="xs" color="$textLight400">
        {timestamp}
      </Text>
    </VStack>
  </Card>
);

export const NotificationCard = React.memo(NotificationCardComponent);

export default NotificationCard;
