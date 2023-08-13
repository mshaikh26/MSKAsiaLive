import { Component } from '@angular/core';

// import Swiper core and required modules
import { SwiperComponent } from 'swiper/angular';

// Import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// initialize swiper module
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard,])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
}
