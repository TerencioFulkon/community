export interface PostItem {
  id: string;
  authorName: string;
  authorAvatarUrl?: string;
  content: string;
  timestamp: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

export interface SpaceItem {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  iconUrl?: string;
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
