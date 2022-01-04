import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 images: any[] = [];
 background = "assets/images/gallery/Category A/banner.png";
 index = 0;
 screenHeight = 0;
 @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
 @HostListener('window:resize', ['$event'])
onResize(even?: any) {
   this.screenHeight = window.innerHeight - 25;
}
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight - 25;
    this.dataService.getHomeImages().forEach(path => {
      this.images.push(path);
    });
    setTimeout(() => {
    this.headerCarousel.next();
    },500);
    setInterval(() => {
      this.headerCarousel.next();
    },5000)
  }

}
