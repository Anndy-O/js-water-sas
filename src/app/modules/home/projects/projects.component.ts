import { Component, OnInit } from '@angular/core';
import projectsData from '../../../../assets/jsons/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = projectsData.cards;
  }

}
