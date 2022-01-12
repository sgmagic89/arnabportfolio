import { Injectable } from '@angular/core';
import  data  from '../../data/site.data.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
siteData: any = data;
constructor() { }

getProfile() {
  return { name: this.siteData.name, role: this.siteData.role };
}

getHomeImages() {
  const paths: any[] = [];
  this.siteData['home'].images.forEach((image: any) => {
    paths.push({path: '/assets/images/gallery/'+ 'home' + '/' + image.name })
  });
  return paths;
}

getIllustrations() {
  const paths: any[] = [];
  this.siteData['illustrations'].images.forEach((image: any) => {
    paths.push({path: '/assets/images/gallery/'+ 'illustrations' + '/' + image.name })
  });
  return paths;
}

getGameArts() {
  return this.siteData['gamearts'];
}

getPassword() {
  return this.siteData["password"];
}

}
