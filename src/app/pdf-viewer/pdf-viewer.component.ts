import { Component } from '@angular/core';
import { SafeUrlPipe } from '../safe.pipe'; // Correct import
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, PdfViewerModule], // Correct import here
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent {
  pdfSrc = 'Resume.pdf'; 
}
