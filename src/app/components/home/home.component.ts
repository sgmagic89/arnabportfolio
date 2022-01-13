import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { slideInOutAnimation } from 'src/app/animations/slide-in-out.animation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  screenHeight = 0;
  show = false;
  @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
  @HostListener('window:resize', ['$event'])
 onResize(even?: any) {
    this.screenHeight = window.innerHeight-15;
 }
   constructor(private dataService: DataService) { }
 
   ngOnInit() {
     this.show = false;
     setTimeout(() => {
       this.show = true
      this.screenHeight = window.innerHeight-15;
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
