import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonsModule } from '@app/shared-modules/buttons/buttons.module';
import { LogoModule } from '@app/shared-modules/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { FormFieldErrorsModule } from '@app/shared-modules/form-field-errors/form-field-errors.module';
import { LoaderModule } from '@app/shared-modules/loader/loader.module';

@NgModule({
  declarations: [LoginComponent],
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
    FormFieldErrorsModule,
    LoaderModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
