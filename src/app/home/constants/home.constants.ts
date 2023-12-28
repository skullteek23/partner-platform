import { IconSelectionDataItem } from '@app/shared-modules/icon-selection-menu/models/icon-selection.model';
import { environment } from 'src/environments/environment';

export class HomeConstants {
  static readonly salutation = 'Partner';
  static readonly confirmed = 'Confirmed';
  static readonly GAME_ON = 'Game ON!';
  static readonly ONGOING = 'LIVE';
  static readonly FINISHED = 'Finished!';
  static readonly CANCELLED = 'Cancelled';
}

export const ACTIONS_MENU_NEW_USER: IconSelectionDataItem[] = [
  { icon: 'stadium', route: '/book-match', label: 'Add Ground' },
  { icon: 'group', route: '/grounds-near-me', label: 'Manage Players' },
  { icon: 'help_outline', route: '/support', label: 'Support' },
  { icon: 'settings', route: '/user', label: 'Settings' },
];
export const ACTIONS_MENU_EXISTING_USER: IconSelectionDataItem[] = [
];
