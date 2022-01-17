import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
show$ = new BehaviorSubject(false);
constructor() { }

show() {
  this.show$.next(true);
}

hide() {
  this.show$.next(false);
}
}
