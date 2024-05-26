import { 
  Directive, 
  HostBinding, 
  HostListener,
  EventEmitter, 
  Input, 
  Output
} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true,
  exportAs: 'highlighter',
})
export class HighlightedDirective {

  @Input('highlighted')
  public isHighlighted: string | boolean = false;

  @Output('onHighlightToggle')
  public onHighlightToggleEvent = new EventEmitter();

  public constructor() {}

  @HostBinding('class.highlighted')
  get getIsHighlighted(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get getIsDisabled(){
    return 'true';
  }

  @HostListener('mouseover', ['$event'])
  public onMouseOver($event: MouseEvent){
    if(this.isHighlighted) return;
    this.isHighlighted = true;
    this.onHighlightToggleEvent.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  public onMouseLeave(){
    if(!this.isHighlighted) return;
    this.isHighlighted = false;
    this.onHighlightToggleEvent.emit(this.isHighlighted);
  }

  public toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
    this.onHighlightToggleEvent.emit(this.isHighlighted);
  }
}
