import { Component, OnInit } from '@angular/core';
import { Constants } from '@ballzo-ui/core';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import {
  ACTIONS_MENU_NEW_USER
} from '@app/home/constants/home.constants';
import {
  IconSelectionData,
  IconSelectionDataItem,
} from '@app/shared-modules/icon-selection-menu/models/icon-selection.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = 'Prateek Goel!';
  buttonDetails = new ButtonConfig();
  data = new IconSelectionData();


  constructor() { }

  ngOnInit(): void {
   
    this.buttonDetails.icon = 'sports_soccer';
    this.buttonDetails.label = Constants.GET_STARTED;
    this.data.items = JSON.parse(JSON.stringify(ACTIONS_MENU_NEW_USER));
  }

  onSelectOption(selection: IconSelectionDataItem) {

  }

  getStarted() {
    console.log("Worked")
  }
}
