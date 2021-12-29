import { Injectable } from '@angular/core';
import  data  from '../../data/site.data.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
profile = data.profile;
gallery: any = data.gallery;
constructor() { }

getCategories() {
  return Object.keys(data.gallery);
}

getPaths(category: string) {
  const paths: any[] = [];
  this.gallery[category].images.forEach((image: any) => {
    paths.push({path: '/assets/images/gallery/'+ this.gallery[category].folder + '/' + image.url})
  });
  return paths;
}

}
