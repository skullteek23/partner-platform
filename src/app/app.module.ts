import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpModule } from './signup/signup.module';
import { LogoModule } from './shared-modules/logo/logo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignUpModule,
    LogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
