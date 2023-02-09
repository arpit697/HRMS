import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[accessibilityClick]",
})
export class AccessibilityClickDirective {
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener("keydown", ["$event"]) keydown(e) {
    console.log(e);

    if (e.which === 32 || e.which == 13) {
      // console.log("came");
      // const event = new MouseEvent("click", {
      //   view: window,
      //   bubbles: true,
      //   cancelable: true,
      // });
      this._elRef.nativeElement.click();
    }
  }
}
