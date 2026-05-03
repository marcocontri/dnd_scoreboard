import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisitorComponent } from "./visitor-component/visitor-component";

@Component({
  selector: 'app-root',
  imports: [VisitorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TabelloDnD');
}
