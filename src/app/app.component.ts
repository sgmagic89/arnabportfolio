import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nav = true;
  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    document.addEventListener('contextmenu', event => event.preventDefault());
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!event.url.includes('home') && event.url !== "/") {
            document.getElementById('nav')?.classList.remove('show');
            document.getElementById('nav')?.classList.add('hide');
          if(window.innerWidth > 1000)
          {
            document.getElementById('ham')!.style.display = 'flex'
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
      this.dataService.getHomeImages();
      this.dataService.getAnimations();
      this.dataService.getGameArts();
      this.dataService.getIllustrations();
      this.dataService.getMiscellaneousCategories().forEach(cat => {
        this.dataService.getMiscellaneousProjects(cat);
      });
      this.dataService.getProfile();
  }

}
