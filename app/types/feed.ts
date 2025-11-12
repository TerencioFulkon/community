export interface PostItem {
  id: string;
  authorName: string;
  authorAvatarUrl?: string;
  content: string;
  timestamp: string;
}

export interface SpaceItem {
  id: string;
  name: string;
  description: string;
  memberCount: number;
}

export interface MessageItem {
  id: string;
  senderName: string;
  senderAvatarUrl?: string;
  preview: string;
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

