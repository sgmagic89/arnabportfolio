import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { slideInOutAnimation } from 'src/app/animations/animations';
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
  imagesLoaded = 0;
  imagesLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
  @HostListener('window:resize', ['$event'])
  onResize(even?: any) {
      this.screenHeight = window.innerHeight-15;
  }
   constructor(private dataService: DataService) {
  }
 
   ngOnInit() {
    this.dataService.getHomeImages().forEach(path => {
      this.images.push(path);
    });
    this.screenHeight = window.innerHeight-15;
    this.imagesLoaded$.subscribe( loaded => {
        if(loaded) {
          this.screenHeight = window.innerHeight-15;
          this.headerCarousel.next();
          setInterval(() => {
            this.headerCarousel.next();
          },5000);
        }
    });
   }

   onAssetsLoad() {
    this.imagesLoaded++;
    if(this.imagesLoaded === this.images.length) {
      this.imagesLoaded$.next(true);
    }
   }
}
