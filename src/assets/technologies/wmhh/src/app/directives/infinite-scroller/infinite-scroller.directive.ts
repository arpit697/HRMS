import { Directive, HostListener, EventEmitter, Output, Input } from "@angular/core";

@Directive({
    selector: "[appScrollDirective]"
})
export class ScrollDirective {

    // <summary>
    // Event ouptut the current scroll percentage
    // </summary>
    @Output() onScroll = new EventEmitter<number>();
    @Input() id;

    // <summary>
    // Holds the current percent value
    // </summary>
    percentValue: number = 0;
    isScrollExceeded:boolean = false;
    
    // <summary>
    // Event listener for scroll event on the specific ui element
    // </summary>
    @HostListener("document:scroll", ["$event"])
    onListenerTriggered(event): void {

      // Calculate the scroll percentage
      let percent = Math.round((event.srcElement.scrollingElement.scrollTop / (event.srcElement.scrollingElement.scrollHeight - event.srcElement.scrollingElement.clientHeight)) * 100);

      if(percent >= this.id && this.isScrollExceeded){
        this.isScrollExceeded = true;
      }else if(percent <= this.id && this.isScrollExceeded){
        this.isScrollExceeded = false;
      }
      
      // Compare the new with old and only raise the event if values change
      if(this.percentValue !== percent){
        // Update the percent value
        this.percentValue = percent;
        
        if(this.percentValue >= this.id && !this.isScrollExceeded ){
          // Emit the event
          this.onScroll.emit(percent);
          this.isScrollExceeded = true;
          }
        }
    }
}