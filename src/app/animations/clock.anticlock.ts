import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

export const rotate = animation([
  animate('{{duration}}ms ease-in-out', style({ transform: 'rotate({{deg}}deg)' }))
], { params: { duration: 1000, deg: 45 } });

export const rotateAnimation = trigger('rotate', [
  transition('* => clockwise', [
    useAnimation(rotate, { params: { duration: 1000, deg: 45 } }),
  ]),
  transition('* => anticlockwise', [
    useAnimation(rotate, { params: { duration: 1000, deg: -45 } }),
  ]),
  transition('clockwise => anticlockwise', [
    useAnimation(rotate, { params: { duration: 1000, deg: -90 } }),
  ]),
  transition('anticlockwise => clockwise', [
    useAnimation(rotate, { params: { duration: 1000, deg: 90 } }),
  ]),
]);