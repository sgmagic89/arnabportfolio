import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { slideAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PreLoaderService } from 'src/app/services/pre-loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    slideAnimation
  ]
})
export class AboutComponent implements OnInit {
  animationStart = false;
  preLoadImages: any[] = [];
  subscription: Subscription = <Subscription>{};
  constructor(public dataService: DataService, 
    private loader: LoaderService,
    private preLoader: PreLoaderService) { }

  ngOnInit() {
    this.loader.show();
    this.preLoadImages.length = 0;
    this.preLoadImages.push({path: 'assets/images/about/li.png'});
    this.preLoadImages.push({path: 'assets/images/about/fb.png'});
    this.preLoadImages.push({path: 'assets/images/about/as.png'});
    this.preLoadImages.push({path: 'assets/images/about/arnab.png'});
    this.subscription = this.preLoader.imagesLoaded$.subscribe(loaded => {
      if(loaded) {
        this.loader.hide();
        setTimeout(() => {
          this.animationStart = true;
        },100);
      }});
  }

}
