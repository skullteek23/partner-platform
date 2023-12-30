import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { LogoModule } from '@app/shared-modules/logo/logo.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../shared-modules/buttons/buttons.module';
import { FormFieldErrorsModule } from '@app/shared-modules/form-field-errors/form-field-errors.module';
import { LoaderModule } from '@app/shared-modules/loader/loader.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    LogoModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormFieldErrorsModule,
    LoaderModule,
  ],
  exports: [SignupComponent],
})
export class SignUpModule { }
