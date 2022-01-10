import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  nav = true;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!event.url.includes('home') && event.url !== "/") {
            document.getElementById('nav')?.classList.remove('show');
            document.getElementById('nav')?.classList.add('hide');
          if(window.innerWidth > 1000)
          {
            document.getElementById('ham')!.style.display = 'block'
            document.getElementById('nav-items')?.classList.remove('show');
            document.getElementById('nav-items')?.classList.add('hide');
          }
          } else {
            document.getElementById('nav')?.classList.remove('hide');
            document.getElementById('nav')?.classList.add('show');
            if(window.innerWidth > 1000)
            {
              document.getElementById('ham')!.style.display = 'none'
            }
          }
        }
      })
  }

}
