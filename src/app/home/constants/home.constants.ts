import { IconSelectionDataItem } from '@app/shared-modules/icon-selection-menu/models/icon-selection.model';
import { environment } from 'src/environments/environment';

export class HomeConstants {
  static readonly salutation = 'Footballer';
  static readonly confirmed = 'Confirmed';
  static readonly GAME_ON = 'Game ON!';
  static readonly ONGOING = 'LIVE';
  static readonly FINISHED = 'Finished!';
  static readonly CANCELLED = 'Cancelled';
}

export const ACTIONS_MENU_NEW_USER: IconSelectionDataItem[] = [
  { icon: 'stadium', route: '/m/book-match', label: 'Add Ground' },
  { icon: 'group', route: '/m/grounds-near-me', label: 'Manage Players' },
  { icon: 'help_outline', route: '/m/support', label: 'Support' },
  { icon: 'settings', route: '/m/user', label: 'Settings' },
];
export const ACTIONS_MENU_EXISTING_USER: IconSelectionDataItem[] = [
  { icon: 'tour', route: '/m/challenges', label: 'Challenges<br>(LTP)' },
  { icon: 'bar_chart', route: '/m/rankings', label: 'Rankings' },
  {
    icon: 'record_voice_over',
    route: '',
    label: 'Organize Match',
    externalLink: environment.urls.admin,
  },
  { icon: 'emoji_events', route: '/m/rewards', label: 'Rewards' },
];
