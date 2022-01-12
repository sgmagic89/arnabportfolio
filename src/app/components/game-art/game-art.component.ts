import { Component, OnInit } from '@angular/core';
import { slideInOutAnimationOther } from 'src/app/animations/slide-in-out.animation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-game-art',
  templateUrl: './game-art.component.html',
  styleUrls: ['./game-art.component.scss'],
  animations: [slideInOutAnimationOther],
  host: { '[@slideInOutAnimationOther]': '' }
})
export class GameArtComponent implements OnInit {
  data: any;
  keys: string[];
  index = 0;
  total: number;
  current: any
  constructor(private dataService: DataService) {
    this.data = this.dataService.getGameArts();
    this.keys = Object.keys(this.data);
    this.total = this.keys.length;
   }

  ngOnInit() {
    this.setCurrent();
    setTimeout(() => {
      document.getElementsByTagName('app-game-art')[0].classList.add('rel');
    }, 2000);
    
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
   }

}
