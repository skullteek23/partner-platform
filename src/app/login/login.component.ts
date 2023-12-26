import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import { MOBILE_VALIDATORS } from '@app/utils/form-validators-utility';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  verifyBtnDetails = new ButtonConfig();


  constructor() { }

  ngOnInit(): void {
    this.initForm();
    this.verifyBtnDetails.label = 'Send OTP';
  }

  initForm() {
    this.userForm = new FormGroup({
      phoneNumber: new FormControl(null, MOBILE_VALIDATORS),
    });
  }
  onSubmit() {
    console.log(this.userForm.value);
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }

}
