import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  subjects = new FormControl();
  subjectList: string[] = ['Mathematics', 'Biology', 'Computer Science', 'Society Science', 'History', 'Politic Science'];

  constructor() { }

  ngOnInit(): void {
  }

}
