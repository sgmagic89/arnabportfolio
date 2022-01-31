import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';

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
  constructor(public dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.animationStart = true;
    },100)
  }

}
