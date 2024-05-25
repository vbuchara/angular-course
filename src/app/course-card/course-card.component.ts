import { 
  AfterContentInit,
  AfterViewInit, 
  Component, 
  ContentChild, 
  ContentChildren, 
  ElementRef, 
  EventEmitter, 
  Input, 
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';

import { Categories, Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent 
  implements AfterViewInit,
    AfterContentInit
{

  @Input({ required: true })
  public course: Course;

  @Input({ required: true })
  public index: number;

  @Input()
  public noImageTemplate: TemplateRef<{ courseName: string }>;

  @Output()
  public courseSelected = new EventEmitter<Course>();

  @ContentChild('courseDescription')
  public description: ElementRef<HTMLDivElement>;

  @ContentChild('courseImage')
  public courseImage: CourseImageComponent;

  @ContentChildren('courseDescription, courseImage')
  public allContent: QueryList<ElementRef>;

  public ngAfterViewInit(): void {
      
  }

  public ngAfterContentInit(): void {
    console.log(this.allContent);
  }

  public onClickViewCourse() {
    this.courseSelected.emit(this.course);
  }

  public getCardClasses(): NgClass['ngClass'] {
    const categoryClasses: Record<Categories, string[] | string> = {
      BEGINNER: ['beginner'],
      INTERMEDIATE: ['intermediate'],
      ADVANCED: ['advanced'],
    };

    return categoryClasses[this.course.category];
  }

  public getCardStyle(): NgStyle['ngStyle'] {
    return {};
  }
}
