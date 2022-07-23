import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const slideFromLeft = trigger('slideFromLeft', [
  transition(':enter', animate('{{index}}ms ease-out', keyframes([
    style({transform: 'translateX(-100%)', opacity: '0', offset: 0}),
    style({transform: 'translateX(20%)', opacity: '0.9', offset: 0.8}),
    style({transform: 'translateX(0)', opacity: '1', offset: 1.0})
  ])), {params: {index: 1}}),
  transition(':leave', animate('1000ms ease-in'))
]);
