import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 images: any[] = [];
 background: any;
 index = 0;
 screenHeight = 0;
 @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
 @HostListener('window:resize', ['$event'])
onResize(even?: any) {
   this.screenHeight = window.innerHeight + 85;
}
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight + 85;
    this.dataService.getCategories().forEach(category => {
      if(category === 'Category A')
      this.dataService.getPaths(category).forEach(path => {
        this.images.push(path);
      })
    });
    
    setTimeout(() => {
      this.headerCarousel.next();
    },500)
  }

}
