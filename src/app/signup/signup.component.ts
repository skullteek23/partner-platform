import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';

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
    });
  }
}
