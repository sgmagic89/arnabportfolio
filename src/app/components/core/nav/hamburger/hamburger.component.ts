import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  view = false;
  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if(event.target.classList.contains('nav-item')) {
      if(document.getElementById('nav-items')?.classList.contains('menu-items')) {
        document.getElementById('nav-items')?.classList.remove('show');
        document.getElementById('nav-items')?.classList.add('hide');
      }
      this.view = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      this.view = false;
      if(window.innerWidth < 1000)
      document.getElementById('ham')!.style.display = 'flex'
      else if(location.href.includes('home'))
      document.getElementById('ham')!.style.display = 'none'
  }
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.view = !this.view;
    if(this.view) {
      document.getElementById('nav-items')?.classList.remove('hide');
      document.getElementById('nav-items')?.classList.add('show');
      document.getElementById('nav')?.classList.remove('hide');
      document.getElementById('nav')?.classList.add('show');
    } else {
      document.getElementById('nav-items')?.classList.remove('show');
      document.getElementById('nav-items')?.classList.add('hide');
      if(!location.href.includes('home')) {
        document.getElementById('nav')?.classList.remove('show');
        document.getElementById('nav')?.classList.add('hide');
      }
    }
  }

}
