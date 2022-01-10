import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  screenHeight = 0;
  @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
  @HostListener('window:resize', ['$event'])
 onResize(even?: any) {
    this.screenHeight = window.innerHeight;
 }
   constructor(private dataService: DataService) { }
 
   ngOnInit() {
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
   }
 
}
