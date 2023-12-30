import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/authentication/auth.service';
import { Constants } from '@ballzo-ui/core';
import { HomeMessages } from '@app/utils/constant/common-messages';
import {
  HomeConstants,
  ACTIONS_MENU_NEW_USER,
  ACTIONS_MENU_EXISTING_USER,
} from '@app/home/constants/home.constants';

import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import {
  IconSelectionData,
  IconSelectionDataItem,
} from '@app/shared-modules/icon-selection-menu/models/icon-selection.model';
import { InteractiveCardData } from '@app/shared-modules/interactive-card/models/interactive-card.model';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly messages = HomeMessages;

  isUserLogged = false;
  name: string = HomeConstants.salutation;
  data = new IconSelectionData();
  buttonDetails = new ButtonConfig();
  isPageInitialized = false;
  subscriptions = new Subscription();
  contentList: InteractiveCardData[] = [];
  isLoaderShown = false;
  uid: string = '';


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkUserLogin();
    this.buttonDetails.icon = 'sports_soccer';
    this.buttonDetails.label = Constants.GET_STARTED;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit(): void {
    const contextWindow = document.getElementById('primary-content-render');
    contextWindow?.scrollTo(0, 0);
  }

  /**
   * Returns whether user is logged in or not.
   */
  checkUserLogin() {
    this.subscriptions.add(
      this.authService._user().subscribe({
        next: (response) => {
          if (response?.displayName) {
            this.name = response?.displayName;
          }
          this.isUserLogged = response ? true : false;
          this.data.items = JSON.parse(JSON.stringify(ACTIONS_MENU_NEW_USER));
          if (response) {
            this.uid = response.uid;
            this.data.extraItems = JSON.parse(
              JSON.stringify(ACTIONS_MENU_EXISTING_USER)
            );

          } else {
            this.data.extraItems = [];
          }
          this.isPageInitialized = true;
        },
        error: (err) => {
          this.isUserLogged = false;
          this.isPageInitialized = true;
          this.data.extraItems = [];
        }
      })
    );
  }

  /**
   * Triggers when any menu option is selected
   * @param selection
   */
  onSelectOption(selection: IconSelectionDataItem) {
    if (selection?.externalLink) {
      window.open(selection.externalLink.trim(), '_blank');
    } else {
      this.navigateTo(selection.route);
    }
  }

  /**
   * Function to navigate to a route for showing loader during navigation
   * @param route
   */
  navigateTo(route: string) {
    this.isPageInitialized = false;
    this.router.navigate([route]).then(() => {
      this.isPageInitialized = true;
    });
  }
  
  getStarted() {
    this.authService.openSignup();
  }
}
