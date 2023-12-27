import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from '@app/shared-modules/buttons/buttons.module';
import { LogoModule } from '@app/shared-modules/logo/logo.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopNavComponent } from './top-nav.component';

@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    LogoModule,
    ButtonsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule
  ],
  exports: [TopNavComponent],
})
export class TopNavModule {}
