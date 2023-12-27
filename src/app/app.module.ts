import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { TopNavModule } from './top-nav/top-nav.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignUpModule,
    LoginModule,
    HomeModule,
    TopNavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
