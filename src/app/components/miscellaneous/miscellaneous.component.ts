import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { slideAnimation, fadeAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PreLoaderService } from 'src/app/services/pre-loader.service';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss'],
  animations: [
    slideAnimation,
    fadeAnimation
  ]
})
export class MiscellaneousComponent implements OnInit, OnDestroy {
  animationStart = false;
  categories:string[] = [];
  currentProjects: any[] = [];
  currentCategory: any;
  index = 0;
  showScrollHelper = true;
  preloadImages: any[] = [];
  subscription: Subscription = <Subscription>{};
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if(this.showScrollHelper) {
      this.showScrollHelper = false;
    }
  }
  constructor(private dataService: DataService,
              private preLoader: PreLoaderService,
              private loader: LoaderService) {
              this.categories = this.dataService.getMiscellaneousCategories();
  }

  ngOnInit() {
    this.setCurrent();
    this.animationStart = true;
    this.subscription = this.preLoader.imagesLoaded$.subscribe(loaded => {
      if(loaded) {
        this.loader.hide();
        this.triggerAnimation();
        this.scrollToTop();
        setTimeout(() => {
          this.isScrollHelperVisible();
        }, 1000)
      }
    })
  }

  next() {
      if(this.index === this.categories.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.setCurrent();
  }

  prev() {
    if(this.index === 0) {
      this.index = this.categories.length - 1;
    } else {
      this.index--;
    }
    this.setCurrent();
  }

  setCurrent() {
    this.loader.show();
    this.currentCategory = this.categories[this.index];
    this.currentProjects = this.dataService.getMiscellaneousProjects(this.currentCategory);
    this.preloadImages.length = 0;
    this.currentProjects.forEach( project => {
      this.preloadImages = this.preloadImages.concat(project.images);
    });
    this.isScrollHelperVisible();
  }

  
  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  
  triggerAnimation() {
    this.animationStart = false;
    setTimeout(() => {
      this.animationStart = true;
    });
  }

  isScrollHelperVisible() {
    if(document.body.scrollHeight > document.body.offsetHeight) {
      this.showScrollHelper = true;
    } else {
      this.showScrollHelper = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.preLoader.reset();
  }

}
