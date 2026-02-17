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
  // compute dynamic years of experience if careerStartYear is provided
  const startYear = this.siteData.about && this.siteData.about.careerStartYear ? Number(this.siteData.about.careerStartYear) : null;
  const now = new Date();
  const years = startYear ? (now.getFullYear() - startYear) : null;

  Object.keys(this.siteData.about.text).forEach(key => {
    let txt: string = this.siteData.about.text[key];
    if (years !== null) {
      // replace occurrences like "over 23 years" or "23 years" with the computed value
      txt = txt.replace(/over\s+\d+\s+years/gi, `over ${years} years`);
      txt = txt.replace(/\b\d+\s+years\b/gi, `${years} years`);
    }
    paras.push(txt);
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
