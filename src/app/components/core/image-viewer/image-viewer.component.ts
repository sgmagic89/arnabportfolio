import { Component, Inject, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  index: any;
  imgPaths: any[] = [];
  subscription: Subscription = {} as Subscription;
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imgPaths = data.images;
    this.index = data.index;
  }

  next() {
    this.index++;
    if(this.index > this.imgPaths.length-1) {
      this.index = 0;
    }
  }

  prev() {
    this.index--;
    if(this.index < 0) {
      this.index = this.imgPaths.length-1;
    }
  }
  ngOnInit() {
    this.subscription = this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart) {
        if(this.dialogRef) {
          this.dialogRef.close();
        }
      }
  });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }



}
