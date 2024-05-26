import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output, QueryList, TemplateRef,
    ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'course-card',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    noImageTpl: TemplateRef<any>;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();

    @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<ElementRef>;

    constructor() {

    }

    ngAfterViewInit() {

    }

    ngAfterContentInit() {

    }

    ngOnInit() {

    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {

        this.courseEmitter.emit(this.course);

    }

    cardClasses() {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
    }

    cardStyles() {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')'

        };
    }



}
