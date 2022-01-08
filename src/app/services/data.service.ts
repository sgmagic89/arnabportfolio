import { Injectable } from '@angular/core';
import  data  from '../../data/site.data.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
profile = data.profile;
gallery: any = data.gallery;
constructor() { }

getHomeImages() {
  const paths: any[] = [];
  this.gallery['home'].images.forEach((image: any) => {
    paths.push({path: '/assets/images/gallery/'+ 'home' + '/' + image.name })
  });
  return paths;
}

getIllustrations() {
  const paths: any[] = [];
  this.gallery['illustrations'].images.forEach((image: any) => {
    paths.push({path: '/assets/images/gallery/'+ 'illustrations' + '/' + image.name })
  });
  return paths;
}

}
