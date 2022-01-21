import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss']
})
export class NavItemsComponent implements OnInit{
  nav = true;
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(window.innerWidth < 1000) {
      this.nav = false;
      document.getElementById('nav-items')?.classList.remove('show');
      document.getElementById('nav-items')?.classList.add('hide');
    } else {
      this.nav = true;
      if(location.href.includes('home') )
      document.getElementById('nav-items')?.classList.remove('hide');
      document.getElementById('nav-items')?.classList.add('show');
    }
  }

  constructor() { }
  ngOnInit(): void {
    if(window.innerWidth < 1000) {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
}
