import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonConfig } from '@app/shared-modules/buttons/models/button.model';
import { AnimationsList } from '@app/utils/services/animation.service';
import { MOBILE_VALIDATORS ,OTP_VALIDATORS,FULL_NAME_VALIDATORS } from '@app/utils/main-utilities/form-validators-utility';
import { AuthBaseComponent } from '../auth-base.component';
import { IConfirmationResult } from '@app/utils/models/user.model';
import { Constants } from '@ballzo-ui/core';
import { IApiError } from '@app/utils/models/firebase-error.model';
import { SnackbarService } from '@app/utils/services/snackbar.service';
import { BottomSheetService } from '@app/utils/services/bottom-sheet.service';
import { ShowConfirmationService } from '@app/utils/services/show-confirmation.service';
import { SessionStorageService } from '@app/utils/services/session-storage.service';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { getAuthErrorMsg, getCloudFnErrorMsg } from '@app/utils/main-utilities/api-error-handling-utility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [AnimationsList.fadeInOutAnimation],
})

export class SignupComponent extends AuthBaseComponent
  implements OnDestroy, AfterViewInit {
  readonly captchaContainer = Constants.LOGIN_CAPTCHA_PLACEHOLDER;
  confirmationResult: IConfirmationResult = null;

  partners: string[] = ['Ground'];

  formGroup = new FormGroup({
    name: new FormControl(null, FULL_NAME_VALIDATORS),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
    phoneNumber: new FormControl(null, MOBILE_VALIDATORS),
    partnerType: new FormControl(null, [Validators.required]),
    otp: new FormControl(null, OTP_VALIDATORS),
  });

  @ViewChild('firstInputRef', { static: false })
  firstInputRef!: ElementRef<MatInput>;

  constructor(
    authService: AuthService,
    snackbarService: SnackbarService,
    bottomSheetService: BottomSheetService,
    router: Router,
    showConfirmationService: ShowConfirmationService,
    sessionStorageService: SessionStorageService
  ) {
    super(
      authService,
      snackbarService,
      bottomSheetService,
      router,
      showConfirmationService,
      sessionStorageService
    );
  }
  ngOnDestroy(): void {
    this.otpSent = false;
    this.phoneNumber?.enable();
  }

  ngAfterViewInit(): void {
    if (this.firstInputRef?.nativeElement) {
      this.firstInputRef.nativeElement.focus();
    }
    this.initCaptcha(Constants.LOGIN_CAPTCHA_PLACEHOLDER);
  }



  requestSignupOtp() {
    if (this.isDisableSendOtpBtn(this.formGroup)) {
      return;
    }
    this.showLoader();
    const number =
      Constants.INDIAN_DIAL_CODE +
      this.getControlValue(this.formGroup, 'phoneNumber');

    // Checks if the user already exists
    this.authService
      .checkUserExists(number)
      .then((result) => {
        if (result?.data) {
          this.hideLoader();
          alert(this.messages.error.userAlreadyExists);
          this.authService.openLogin();
        } else {
          this.requestOtp(this.formGroup)
            .then((confirmationResult) => {
              this.hideLoader();
              this.confirmationResult = confirmationResult;
              this.otpSent = true;
              this.phoneNumber?.disable();
              this.continueBtnDetails.label = 'Continue';
            })
            .catch((error: IApiError) => {
              this.snackbarService.displayError(getAuthErrorMsg(error));
              this.hideLoader();
              this.confirmationResult = null;
              this.otpSent = false;
              this.phoneNumber?.enable();
            });
        }
      })
      .catch((error: any) => {
        this.snackbarService.displayError(getCloudFnErrorMsg(error));
        this.hideLoader();
        this.phoneNumber?.enable();
      });
  }

  isDisableSendOtpBtn(formGroup: FormGroup): boolean {
    return (
      formGroup?.get('name')?.invalid ||
      formGroup?.get('company')?.invalid ||
      formGroup?.get('email')?.invalid ||
      formGroup?.get('phoneNumber')?.invalid ||
      formGroup?.get('partnerType')?.invalid ||
      !formGroup?.get('name')?.dirty ||
      !formGroup?.get('company')?.dirty ||
      !formGroup?.get('email')?.dirty ||
      !formGroup?.get('phoneNumber')?.dirty ||
      !formGroup?.get('partnerType')?.dirty
    );
  }

  editNumber() {
    this.otpSent = false;
    this.phoneNumber?.enable();
  }

  get name() {
    return this.formGroup?.get('name');
  }

  get company() {
    return this.formGroup?.get('company');
  }

  get email() {
    return this.formGroup?.get('email');
  }

  get phoneNumber() {
    return this.formGroup?.get('phoneNumber');
  }

  get partnerType() {
    return this.formGroup?.get('partnerType');
  }

  get otp() {
    return this.formGroup?.get('otp');
  }


}
