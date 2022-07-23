import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // these are the menu items used in the toolbar
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: '/home'
    },
    {
      label: 'Units',
      icon: 'search',
      link: '/units'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}
