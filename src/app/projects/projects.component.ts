import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit{

  private marquee: HTMLElement | null = null;
  private scrollAmount = 0;
  private isHovered = false;
  private readonly speed = 1; // Scrolling Speed

  ngAfterViewInit(): void {
    this.marquee = document.querySelector('.marquee-inner');
    if (this.marquee) {
      // Duplicates the content
      const marqueeContent = this.marquee.innerHTML;
      this.marquee.innerHTML += marqueeContent;

      this.startScrolling();

      this.marquee.addEventListener('mouseover', () => this.isHovered = true);
      this.marquee.addEventListener('mouseout', () => this.isHovered = false);
    }
  }

  private startScrolling(): void {
    if (this.marquee) {
      if (!this.isHovered) {
        this.scrollAmount -= this.speed;
        if (Math.abs(this.scrollAmount) >= this.marquee.scrollWidth / 2) {
          this.scrollAmount = 0;
        }
        this.marquee.style.transform = `translateX(${this.scrollAmount}px)`;
      }
      requestAnimationFrame(() => this.startScrolling());
    }
  }

}
