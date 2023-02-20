import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Directive({
  selector: '[appGetClassesAndAttribute]',
})
export class GetClassesAndAttributeDirective {
  @Input() appGetClassesAndAttributes!: ElementRef;

  constructor(private renderer: Renderer2) {}

  get classes(): string[] {
    return Array.from(
      this.renderer.selectRootElement(
        this.appGetClassesAndAttributes.nativeElement
      ).classList
    );
  }

  get attributes(): { [key: string]: string } {
    const element = this.renderer.selectRootElement(
      this.appGetClassesAndAttributes.nativeElement
    );
    const attributes: { [key: string]: string } = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attribute = element.attributes[i];
      attributes[attribute.name] = attribute.value;
    }
    return attributes;
  }
}
