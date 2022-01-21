import { Component, OnInit } from '@angular/core';
import { slideAnimation, fadeAnimation } from 'src/app/animations/animations';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss'],
  animations: [
    slideAnimation,
    fadeAnimation
  ]
})
export class MiscellaneousComponent implements OnInit {
  animationStart = false;
  categories:string[] = [];
  currentProjects: any[] = [];
  currentCategory: any;
  index = 0;
  constructor(private dataService: DataService) {
    this.categories = this.dataService.getMiscellaneousCategories();
    this.setCurrent();
  }

  ngOnInit() {
    this.animationStart = true;
  }

  next() {
    if(this.index === this.categories.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.setCurrent();
  }

  prev() {
    if(this.index === 0) {
      this.index = this.categories.length - 1;
    } else {
      this.index--;
    }
    this.setCurrent();
  }

  setCurrent() {
    this.currentCategory = this.categories[this.index];
    this.currentProjects = this.dataService.getMiscellaneousProjects(this.currentCategory);
  }

}
