import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PreLoaderService } from 'src/app/services/pre-loader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnChanges {
  @Input() images: any[] = [];

  constructor(public preLoadService: PreLoaderService) { }

  ngOnInit(): void {
    this.preLoadService.initLoad(this.images.length);
  }

  ngOnChanges(): void {
    this.preLoadService.initLoad(this.images.length);
  }
}
