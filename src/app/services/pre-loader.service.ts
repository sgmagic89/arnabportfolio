import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreLoaderService {
imagesLoaded = 0;
imagesLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
totalImages = -1;
constructor() { }

onAssetsLoad() {
  this.imagesLoaded++;
  if(this.imagesLoaded === this.totalImages) {
    this.imagesLoaded$.next(true);
  }
 }

 initLoad(totalImages: number) {
  this.imagesLoaded$.next(false);
   this.totalImages = totalImages;
   this.imagesLoaded = 0;
 }

}
