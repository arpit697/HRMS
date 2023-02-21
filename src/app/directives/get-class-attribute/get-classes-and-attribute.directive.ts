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

  // This method returns an array of classes applied to the element
  get classes(): string[] {
    // Use the Renderer2 API to select the root element of the directive
    const element = this.renderer.selectRootElement(
      this.appGetClassesAndAttributes.nativeElement
    );
    // Use the classList property of the element to get the applied classes as an array
    console.log(element.classList);
    return Array.from(element.classList);
  }

  // This method returns an object containing the attribute names and values of the element
  get attributes(): { [key: string]: string } {
    // Use the Renderer2 API to select the root element of the directive
    const element = this.renderer.selectRootElement(
      this.appGetClassesAndAttributes.nativeElement
    );
    // Create an empty object to store the attributes
    const attributes: { [key: string]: string } = {};
    // Iterate over the attributes of the element and add them to the object
    for (let i = 0; i < element.attributes.length; i++) {
      const attribute = element.attributes[i];
      attributes[attribute.name] = attribute.value;
    }
    // Return the object with the attributes
    console.log(attributes);
    return attributes;
  }
}
