import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '';
  constructor(private route: Router) {}
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }
}
