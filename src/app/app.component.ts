import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LocalStorageProperties, Constants } from '@ballzo-ui/core';
import { filter } from 'rxjs';
import { LocalStorageService } from './utils/services/local-storage.service';
import { AuthService } from './authentication/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'partner-platform';
  readonly loginCaptcha = Constants.LOGIN_CAPTCHA_PLACEHOLDER;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        let currentRoute = this.route.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        // Check if the current page should have scroll-to-top behavior
        const element = document.getElementById('main-container-app');
        if (currentRoute.snapshot.data['scrollToTop'] && element) {
          element.scrollIntoView();
        }
        // This event is fired when a route has successfully ended
        const sheetOpen = this.localStorageService.get(
          LocalStorageProperties.BOTTOM_SHEET
        );
        const loginRoute = `/${Constants.loginURL}`;
        const signupRoute = `/${Constants.signupURL}`;

        if (sheetOpen && window.location.pathname.includes(loginRoute)) {
          this.authService.openLogin();
        } else if (window.location.pathname.includes(signupRoute)) {
          this.authService.openSignup();
        }
      });
  }
}

