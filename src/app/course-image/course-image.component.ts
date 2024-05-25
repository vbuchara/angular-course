import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'course-image',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {
  @Input({ required: true })
  public imageUrl: string;
}
