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
    this.dataService.getCategories().forEach(category => {
      if(category === 'Category A')
      this.dataService.getPaths(category).forEach(path => {
        this.images.push(path);
      })
    });
    
  }

}
