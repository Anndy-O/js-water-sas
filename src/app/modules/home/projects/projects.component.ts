import { Component, OnInit } from '@angular/core';
import projectsData from '../../../../assets/jsons/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = projectsData.cards;
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1; // Vuelve al último si está al principio
    }
  }

  moveRight() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al principio si está al final
    }
  }
}
