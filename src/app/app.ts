import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home-component/home-component";
import { VisitorComponent } from "./visitor-component/visitor-component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, VisitorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TabelloDnD');
}
