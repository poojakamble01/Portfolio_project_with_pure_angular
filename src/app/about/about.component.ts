import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, ExperienceComponent, ProjectComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] 
})
export class AboutComponent {}
