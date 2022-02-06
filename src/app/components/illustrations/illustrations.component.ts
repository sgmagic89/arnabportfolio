import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import lightGallery from 'lightgallery';
import { DataService } from 'src/app/services/data.service';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { slideInOutAnimation } from 'src/app/animations/animations';
import { PreLoaderService } from 'src/app/services/pre-loader.service';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import fjGallery from 'flickr-justified-gallery';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImageViewerComponent } from '../core/image-viewer/image-viewer.component';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class IllustrationsComponent implements AfterViewInit, OnDestroy {
  preLoadImages: any[] = [];
  images: any[] = [];
  dialogRef!:MatDialogRef<ImageViewerComponent>;
  subscription: Subscription = <Subscription>{};
  constructor(private dataService: DataService, 
    private preLoader: PreLoaderService, 
    public dialog: MatDialog,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef) {
   
  }

  ngAfterViewInit(): void {
    this.loader.show();
    this.preLoadImages.length = 0;
    this.preLoadImages = this.dataService.getIllustrations();
    this.cdr.detectChanges();
    this.preLoadImages.forEach(illus => {
      this.images.push({
        src: illus.path,
        thumb: illus.path
      })
    });
// Since we are using dynamic mode, we need to programmatically open lightGallery
this.subscription = this.preLoader.imagesLoaded$.subscribe(loaded => {
  if(loaded) {
    this.loader.hide();

    // this.initGallery();
    fjGallery(document.querySelectorAll('.fj-gallery'), {
      itemSelector: '.fj-gallery-item',
      rowHeight: 800
    });
  }
});

}

initGallery() {
  const lgContainer = <HTMLElement>document.getElementById('inline-gallery-container');
  const inlineGallery = lightGallery(lgContainer, {
  mobileSettings: {
    controls: true
  }, 
  container: lgContainer,
  // Turn off hash plugin in case if you are using it
  // as we don't want to change the url on slide change
  hash: false,
  // Do not allow users to close the gallery
  closable: true,
  thumbnail: true,
  // Add maximize icon to enlarge the gallery
  showMaximizeIcon: false,
  download: false,
  zoom: true,
  // Append caption inside the slide item
  // to apply some animation for the captions (Optional)
  // appendSubHtmlTo: '.lg-item',
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 400,
  plugins: [lgZoom],
  dynamicEl: this.images,
  thumbHeight: "85px",
  thumbMargin: 4,
  alignThumbnails: 'middle',
});
  // inlineGallery.openGallery();
}

open(index: any) {
  this.dialog.open(ImageViewerComponent, {
    width: '100%',
    data: { images: this.images, index: index },
    panelClass: ['full-screen-modal']
  });
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.preLoader.reset();
 }

}
