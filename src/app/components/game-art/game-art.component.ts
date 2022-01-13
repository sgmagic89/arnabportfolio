import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { slideInOutAnimationOther } from 'src/app/animations/slide-in-out.animation';
import { DataService } from 'src/app/services/data.service';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-game-art',
  templateUrl: './game-art.component.html',
  styleUrls: ['./game-art.component.scss'],
  animations: [slideInOutAnimationOther, 
                trigger('fade', [
                state('false', style({ opacity: 0 })),
                state('true', style({ opacity: 1 })),
                transition('false => true', animate('500ms ease-in-out'))
              ]),
              trigger('slide', [
                state('false', style({ transform: 'translateX(-100%)' })),
                state('true', style({ transform: 'translateX(0%)' })),
                transition('false => true', animate('1000ms ease-in-out'))
              ])
  ],
  host: { '[@slideInOutAnimationOther]': '' }
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
