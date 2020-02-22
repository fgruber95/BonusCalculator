import { Router } from '@angular/router';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'public-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() sideNavOpened: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
  ) {}

}
