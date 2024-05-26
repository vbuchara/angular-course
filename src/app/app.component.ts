import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    public courses = COURSES;

    @ViewChild(CourseCardComponent, { read: HighlightedDirective })
    public highlighter : HighlightedDirective;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    public constructor() {

    }

    public ngAfterViewInit() {
      console.log(this.highlighter);
    }

    public onCourseSelected(course: Course) {

    }

    public onHighlightToggle(isHighlighted: boolean){
      console.log(isHighlighted);
    }

}
