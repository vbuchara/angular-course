import { 
  Directive, 
  Input, 
  TemplateRef, 
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  private isVisible = false;

  private templateRef: TemplateRef<any>;
  private viewContainer: ViewContainerRef;

  constructor(
    templateRef: TemplateRef<any>,
    viewContainer: ViewContainerRef
  ) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }

  @Input()
  set ngxUnless(condition: boolean) {
    if(!condition && !this.isVisible){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isVisible = true;
      return;
    }

    if(condition && this.isVisible){
      this.viewContainer.clear();
      this.isVisible = false;
    }
  }

}
