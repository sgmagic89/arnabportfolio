import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { fadeAnimation, slideAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PreLoaderService } from 'src/app/services/pre-loader.service';
import { ImageViewerComponent } from '../core/image-viewer/image-viewer.component';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-game-art',
  templateUrl: './game-art.component.html',
  styleUrls: ['./game-art.component.scss'],
  animations: [
    slideAnimation,
    fadeAnimation
  ]
})
export class GameArtComponent implements OnInit, OnDestroy {
  data: any;
  keys: string[];
  index = 0;
  total: number;
  current: any;
  dialogRef!:MatDialogRef<PasswordComponent>;
  showScrollHelper = true;
  animationStart = false;
  preloadImages: any[] = [];
  subscription: Subscription = <Subscription>{};
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if(this.showScrollHelper) {
      this.showScrollHelper = false;
    }
  }
  constructor(private dataService: DataService, 
              public dialog: MatDialog, 
              private preLoader: PreLoaderService,
              private loader: LoaderService) {
    this.data = this.dataService.getGameArts();
    this.keys = Object.keys(this.data);
    this.total = this.keys.length;
   }

  ngOnInit() {
    this.dialogRef = this.dialog.open(PasswordComponent);
    this.dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.setCurrent();
        setTimeout(() => {
          document.getElementsByTagName('app-game-art')[0].classList.add('rel');
          this.animationStart = true;
        }, 500);
      }
    });    
    this.subscription = this.preLoader.imagesLoaded$.subscribe(loaded => {
      if(loaded) {
        this.loader.hide();
        this.triggerAnimation();
        this.scrollToTop();
        setTimeout(() => {
          this.isScrollHelperVisible();
        },1000)
      }
    })
  }

  open(index: any) {
    this.dialog.open(ImageViewerComponent, {
      width: '100%',
      data: { images: this.preloadImages, index: index, changeImage: false },
      panelClass: ['full-screen-modal']    
    });
  }

  setCurrent() {
    this.current = this.data[this.keys[this.index]];
    this.loader.show();
    this.current.images.forEach((image: any) => {
      image["path"] = "assets/images/gallery/gamearts/" + this.current.name + "/" + image.name;
    });
    this.preloadImages = this.current.images.filter((image: any) => !image.path.includes('http'));
  }

  next() {
    if(this.index === this.total - 1) {
      this.index = 0;
    } else {
      ++this.index;
    }
    this.setCurrent();
  }

  prev() {
    if(this.index === 0) {
      this.index = this.total - 1;
    } else {
      --this.index;
    }
    this.setCurrent();
  }

  ngOnDestroy(): void {
    document.getElementsByTagName('app-game-art')[0].classList.remove('rel');
    this.dialogRef.close();
    this.subscription.unsubscribe();
    this.preLoader.reset();
  }

  isScrollHelperVisible() {
    if(document.body.scrollHeight > document.body.offsetHeight) {
      this.showScrollHelper = true;
    } else {
      this.showScrollHelper = false;
    }
  }

  triggerAnimation() {
    this.animationStart = false;
    setTimeout(() => {
      this.animationStart = true;
    }, 500)
  }

  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
