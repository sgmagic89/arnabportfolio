import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MyProfile';
  ngOnInit() {
    this.loadScript();
  }
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = "assets/js/theme.js";
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}
}

