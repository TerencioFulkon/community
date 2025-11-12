import { TabKey } from 'app/layouts/TabBar';

export interface ScreenProps {
  activeTab: TabKey;
  onTabPress: (key: TabKey) => void;
}

