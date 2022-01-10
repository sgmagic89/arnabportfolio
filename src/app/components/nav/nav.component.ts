import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NavItemsComponent } from './nav-items/nav-items.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  profile: any;
  constructor(private dataService: DataService, private renderer: Renderer2) {
    this.profile = this.dataService.getProfile();
  }

}
