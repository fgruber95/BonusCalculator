import { Router } from '@angular/router';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'public-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    public router: Router,
  ) {}

}
