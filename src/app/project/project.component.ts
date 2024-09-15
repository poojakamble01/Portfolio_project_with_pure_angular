import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {

  private marquee: HTMLElement | null = null;
  private scrollAmount = 0;
  private isHovered = false;
  private readonly speed = 1; // Scrolling Speed
  
  projects = [
    { name: 'College Library Website', icon: 'fas fa-book', repo: 'https://github.com/poojakamble01/Library-WebApp.git' },
    { name: 'Beauty Website', icon: 'fas fa-spa', repo: 'https://github.com/poojakamble01/website1.git' },
    { name: 'TODO-App Project', icon: 'fas fa-tasks', repo: 'https://github.com/poojakamble01/TODO-.git' },
    { name: 'Pure-JS-Counter-App', icon: 'fas fa-calculator', repo: 'https://github.com/poojakamble01/Pure-JS-Counter-App.git' },
  ];

  ngAfterViewInit(): void {
    this.marquee = document.querySelector('.marquee-inner');
    if (this.marquee) {
      // Duplicates the content to create a continuous loop effect
      const marqueeContent = this.marquee.innerHTML;
      this.marquee.innerHTML += marqueeContent; // Double the content to loop smoothly

      this.startScrolling();

      // Pause scrolling on hover
      this.marquee.addEventListener('mouseover', () => this.isHovered = true);
      this.marquee.addEventListener('mouseout', () => this.isHovered = false);
    }
  }

  private startScrolling(): void {
    if (this.marquee) {
      if (!this.isHovered) {
        this.scrollAmount -= this.speed;
        // Reset the scroll position when half of the marquee (first copy) is fully scrolled out
        if (Math.abs(this.scrollAmount) >= this.marquee.scrollWidth / 2) {
          this.scrollAmount = 0; // Reset to the start of the scroll
        }
        this.marquee.style.transform = `translateX(${this.scrollAmount}px)`; // Apply scrolling
      }
      requestAnimationFrame(() => this.startScrolling()); // Continuously update
    }
  }
}
