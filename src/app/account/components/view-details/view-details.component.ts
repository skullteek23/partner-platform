import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/authentication/auth.service';
import { AccountMessages } from '@app/utils/constant/common-messages';
import { IUser } from '@app/utils/models/user.model';
import { ShowConfirmationService } from '@app/utils/services/show-confirmation.service';
import {
  ButtonConfig,
  ButtonTheme,
} from '@app/shared-modules/buttons/models/button.model';
import { DetailsContainerData } from '@app/shared-modules/details-container/models/details-container.model';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  readonly ButtonTheme = ButtonTheme;
  readonly messages = AccountMessages;

  isPageInitialized = false;
  logoutBtn = new ButtonConfig();
  user: IUser = null;
  personalDetailsData = new DetailsContainerData();

  constructor(
    private authService: AuthService,
    private showConfirmationService: ShowConfirmationService,

  ) { }

  ngOnInit(): void {
    this.authService._user().subscribe(async user => {
      if (user?.uid) {
        this.user = user;
        this.setBtnDetails();
      }
    })
  }


  /**
   * Set the button details
  */
  setBtnDetails() {
    this.logoutBtn.label = 'Logout';
    this.logoutBtn.icon = 'logout';

  }

  /**
   * Logout the user
   */
  logout(): void {
    const result = this.showConfirmationService.openNativeConfirm(this.messages.confirmation.logout);
    if (result) {
      this.authService.logout();
    }
  }

}
