import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { fadeAnimation, slideAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';
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
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.showScrollHelper = false;
  }
  constructor(private dataService: DataService, public dialog: MatDialog) {
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
    })    
  }

  setCurrent() {
    this.current = this.data[this.keys[this.index]];
    this.current.images.forEach((image: any) => {
      image["path"] = "assets/images/gallery/gamearts/" + this.current.name + "/" + image.name;
    });
    console.log(this.current);
  }

  next() {
    if(this.index === this.total - 1) {
      this.index = 0;
    } else {
      ++this.index;
    }
    this.setCurrent();
    this.triggerAnimation();
    this.showScrollHelper = true;
  }

  prev() {
    if(this.index === 0) {
      this.index = this.total - 1;
    } else {
      --this.index;
    }
    this.setCurrent();
    this.triggerAnimation();
    this.showScrollHelper = true;
  }

  ngOnDestroy(): void {
    document.getElementsByTagName('app-game-art')[0].classList.remove('rel');
    this.dialogRef.close();
  }

  triggerAnimation() {
    this.animationStart = false;
    setTimeout(() => {
      this.animationStart = true;
    }, 500)
  }

}
