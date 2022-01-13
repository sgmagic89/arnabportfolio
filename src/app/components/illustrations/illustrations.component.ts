import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import lightGallery from 'lightgallery';
import { DataService } from 'src/app/services/data.service';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { slideInOutAnimationOther } from 'src/app/animations/slide-in-out.animation';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss'],
  animations: [slideInOutAnimationOther],
  host: { '[@slideInOutAnimationOther]': '' }
})
export class IllustrationsComponent implements AfterViewInit {
  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    const images: any[] = []
    this.dataService.getIllustrations().forEach(illus => {
      images.push({
        src: illus.path,
        thumb: illus.path
      })
    });
    const lgContainer = <HTMLElement>document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: false,
    download: false,
    zoom: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    // appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: images,
    thumbHeight: "85px",
    thumbMargin: 4,
    alignThumbnails: 'middle'
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
setTimeout(() => {
  inlineGallery.openGallery();
    }, 200);
}

}
