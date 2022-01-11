import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { slideInOutAnimationHome } from 'src/app/animations/slide-in-out.animation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInOutAnimationHome],
  host: { '[@slideInOutAnimationHome]': '' }
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  screenHeight = 0;
  show = false;
  @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
  @HostListener('window:resize', ['$event'])
 onResize(even?: any) {
    this.screenHeight = window.innerHeight;
 }
   constructor(private dataService: DataService) { }
 
   ngOnInit() {
     this.show = false;
     setTimeout(() => {
       this.show = true
      this.screenHeight = window.innerHeight;
      this.dataService.getHomeImages().forEach(path => {
        this.images.push(path);
      });
      setTimeout(() => {
      this.headerCarousel.next();
      });
      setInterval(() => {
        this.headerCarousel.next();
      },5000)
     },1000)

   }
 
}
