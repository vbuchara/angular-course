
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COURSES } from 'src/db-data';

import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseImageComponent } from '../course-image/course-image.component';

import type { Course } from '../model/course';

@Component({
  selector: 'course-list',
  standalone: true,
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    CommonModule
],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements AfterViewInit{
  public courses = COURSES;

  public startDate = new Date(2000, 0, 1);

  public title = this.courses[0].description;

  public price = 10.99;

  public rate = 0.75;

  @ViewChild('courseList')
  public courseList: ElementRef<HTMLDivElement>;

  @ViewChild('firstCard')
  public firstCard: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  public allCards: QueryList<ElementRef>;

  public ngAfterViewInit(): void {
    this.allCards.changes.subscribe((cards) => {
      console.log(cards);
    });
  }

  public onAddCourseClick() {
    this.courses.push({
      id: this.courses.length + 1,
      description: 'New Course',
      longDescription: "Description of a new course",
      category: 'ADVANCED'
    });
  }

  public trackCourse(_: number, course: Course){
    return course.id;
  }

  public onCourseSelected(course: Course): void {
    console.log(this.firstCard);

    console.log(this.courseList);
  }
}
