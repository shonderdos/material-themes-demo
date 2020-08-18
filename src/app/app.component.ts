import { Component } from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switchTheme(e: MatSlideToggleChange) {
    if (document.body.classList.contains("default-theme")) {
      document.body.classList.remove("default-theme")
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.add("default-theme")
      document.body.classList.remove("dark-theme")
    }
  }
}
