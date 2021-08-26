import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  groups: string[] = ['A', 'B', 'C', 'D'];

  constructor() { }

  ngOnInit(): void {
  }

}
