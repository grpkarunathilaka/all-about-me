import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectsData: any[] = [];
  transform = 0;
  @ViewChild('carouselInner') carouselInner: ElementRef | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.projectsData = data.projects;
    });
  }

  prev() {
    if (this.carouselInner) {
      const itemWidth = this.carouselInner.nativeElement.children[0].clientWidth;
      this.transform += itemWidth * 2;
      if (this.transform > 0) {
        this.transform = 0;
      }
    }
  }

  next() {
    if (this.carouselInner) {
      const itemWidth = this.carouselInner.nativeElement.children[0].clientWidth;
      const totalWidth = this.carouselInner.nativeElement.scrollWidth;
      const visibleWidth = this.carouselInner.nativeElement.parentElement.clientWidth;
      if (Math.abs(this.transform) < totalWidth - visibleWidth) {
        this.transform -= itemWidth * 2;
      }
    }
  }
}
