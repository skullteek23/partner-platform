import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import { FULL_NAME_VALIDATORS } from '@app/utils/form-validators-utility';
import { MOBILE_VALIDATORS } from '@app/utils/form-validators-utility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  userForm!: FormGroup;
  verifyBtnDetails = new ButtonConfig();
  partners: string[] = ['Ground'];

  constructor() { }
  ngOnInit(): void {
    this.initForm();
    this.verifyBtnDetails.label = 'Verify OTP';
  }

  initForm() {
    this.userForm = new FormGroup({
      name: new FormControl(null, FULL_NAME_VALIDATORS),
      company: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      mobile: new FormControl(null, MOBILE_VALIDATORS),
      partnerType: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
      console.log(this.userForm.value);
  }
}
