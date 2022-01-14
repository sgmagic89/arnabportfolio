import { Component, OnInit } from '@angular/core';
import { slideAnimation, fadeAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    slideAnimation,
    fadeAnimation
  ]
})
export class AnimationsComponent implements OnInit {
  animationStart = false;
  animations: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    const animationList: any = this.dataService.getAnimations();
    Object.keys(animationList).forEach(anim => {
      this.animations.push(animationList[anim]);
    });
    setTimeout(() => {
      this.animationStart = true;
    },500);
  }

}
