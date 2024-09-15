import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, FooterComponent] // Import FontAwesomeModule
 // Import FontAwesomeModule
})
export class ContactComponent {
  // Define FontAwesome icon properties
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;
}
