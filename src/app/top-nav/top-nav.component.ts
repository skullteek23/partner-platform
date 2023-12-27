import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  readonly groupLink = environment.urls.whatsAppGroup;

  userBalance: number = 0;
  
  constructor(

  ) { }

  ngOnInit(): void {
  }

  redirectToWhatsapp(): void {
    window.open(this.groupLink, '_blank');
  }
}
