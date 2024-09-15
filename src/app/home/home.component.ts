import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from "../pdf-viewer/pdf-viewer.component";
import { FooterComponent } from "../footer/footer.component";
import { ExperienceComponent } from "../experience/experience.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PdfViewerComponent, FooterComponent, ExperienceComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  skills = [
    { name: 'HTML', progress: 95, percent: 0 },
    { name: 'CSS', progress: 95, percent: 0 },
    { name: 'JavaScript', progress: 70, percent: 0 },
    { name: 'Bootstrap & JQuery', progress: 70, percent: 0 },
    { name: 'ASP.NET C#', progress: 90, percent: 0 },
    { name: 'SQL', progress: 80, percent: 0 },
  ];

  constructor(private renderer: Renderer2) {} // Declare renderer property

  ngAfterViewInit() {
    this.runProgressBar();
  }

  runProgressBar() {
    let count = 0;
    const MAX = Math.max(...this.skills.map(skill => skill.progress));

    const interval = setInterval(() => {
      count++;
      this.skills.forEach((skill, index) => {
        if (count <= skill.progress) {
          skill.percent = count;
          const element = document.querySelectorAll('.progress')[index];
          this.renderer.setStyle(
            element.parentElement,
            'background',
            `conic-gradient( white, ${count}%,#2F80ED 0)`
          );
        }
        if (count === MAX) {
          clearInterval(interval);
        }
      });
    }, 20);
  }
}
