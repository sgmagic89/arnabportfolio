import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { slideInOutAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PreLoaderService } from 'src/app/services/pre-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  images: any[] = [];
  screenHeight = 0;
  subscription: Subscription = <Subscription>{};

  @ViewChild('headerCarousel', {static: false}) headerCarousel: any;
  @HostListener('window:resize', ['$event'])
  onResize(even?: any) {
      this.screenHeight = window.innerHeight-15;
  }
   constructor(private dataService: DataService, 
              private loader: LoaderService,
              private preLoader: PreLoaderService,
              private cdr: ChangeDetectorRef) {
  }
 
   ngAfterViewInit(): void {
    this.loader.show();
    this.images = this.dataService.getHomeImages();
    this.screenHeight = window.innerHeight-15;
    this.cdr.detectChanges();

    this.subscription = this.preLoader.imagesLoaded$.subscribe( loaded => {
        if(loaded) {
          this.screenHeight = window.innerHeight-15;
          this.headerCarousel.next();
          this.loader.hide();
          setInterval(() => {
            this.headerCarousel.next();
          },5000);
        }
    });
   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }
}
