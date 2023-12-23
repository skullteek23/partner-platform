import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import { FULL_NAME_VALIDATORS } from '@app/utils/form-validators-utility';
import { IUser } from '@app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user!: IUser;
  userForm!: FormGroup;
  verifyBtnDetails = new ButtonConfig();

  partners: string[] = ['Ground'];


  constructor() { }

  ngOnInit(): void {
    this.verifyBtnDetails.label = 'Verify OTP';
    this.userForm = new FormGroup({
      // name: new FormControl(this.user?.displayName, FULL_NAME_VALIDATORS),
      // email: new FormControl(this.user?.email, [Validators.email]),
    });
  }

}
