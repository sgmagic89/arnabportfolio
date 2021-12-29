import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    ($('.banner') as any).ripples({
      resolution: 750,
      dropRadius: 20,
      perturbance: 0.04,
    });
    setInterval(function() {
      const $el: any = $('.banner');
      const x = Math.random() * $el.outerWidth();
      const y = Math.random() * $el.outerHeight();
      const dropRadius = 25;
      const strength = 0.04 + Math.random() * 0.04;
      $el.ripples('drop', x, y, dropRadius, strength);
    }, 100);
    this.dataService.getCategories().forEach(category => {
      this.dataService.getPaths(category).forEach(path => {
        this.images.push(path);
      })
    });
    
    console.log(this.background)
    this.background = '/assets/images/gallery/Collages/collage1.jpg';
      // setInterval(() => {
      //   if(this.index === this.images.length-1) {
      //     this.index = 0;
      //   }
      //   this.background = this.images[this.index].path;
      //   this.index++;
      // },5000); 
  }

}
