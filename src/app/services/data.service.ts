import { Injectable } from '@angular/core';
import  data  from '../../assets/site.data.json';
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
    paths.push({path: '/assets/images/gallery/illustrations/' + image.name })
  });
  return paths;
}

getGameArts() {
  return this.siteData['gamearts'];
}

getAnimations() {
  return this.siteData['animations'];
}

getMiscellaneousCategories() {
  return Object.keys(this.siteData['miscellaneous']);
}

getMiscellaneousProjects(categoryName: string) {
  this.siteData['miscellaneous'][categoryName].forEach((project:any) => {
    project.images.forEach((image: any) => {
      if(!image.path)
      image['path'] = "/assets/images/gallery/miscellaneous/" + categoryName + "/" + project.name + "/" + image.name;
    });
  });
  return this.siteData['miscellaneous'][categoryName];
}

getAboutText() {
  const paras: string[]= [];
  Object.keys(this.siteData.about.text).forEach(key => {
    paras.push(this.siteData.about.text[key]);
  });
  return paras;
}

getLink(network: string) {
  return this.siteData.about.links[network];
}

getEmail() {
  return this.siteData.about.email;
}

getPassword() {
  return this.siteData["password"];
}

}
