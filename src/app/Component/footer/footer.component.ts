import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
}
