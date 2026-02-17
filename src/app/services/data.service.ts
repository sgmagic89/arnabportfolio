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
  const all = this.siteData['gamearts'] || {};
  const excludeList: string[] = (this.siteData['exclude'] && Array.isArray(this.siteData['exclude'].gamearts)) ? this.siteData['exclude'].gamearts : [];
  if (!excludeList.length) return all;
  // Return a shallow copy with excluded keys removed so callers don't need to filter themselves
  const filtered: any = {};
  Object.keys(all).forEach(key => {
    if (!excludeList.includes(key)) {
      filtered[key] = all[key];
    }
  });
  return filtered;
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
      // Replace only explicit experience phrases like "over 23 years"
      // Avoid replacing unrelated durations such as "3 years diploma".
      txt = txt.replace(/over\s+\d+\s+years/gi, `over ${years} years`);
      // If you later want to support other patterns (e.g. "for \d+ years"), add
      // additional targeted regexes rather than a blanket replacement.
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
