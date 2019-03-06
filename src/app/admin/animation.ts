import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const fadeLateral =
  trigger('fadeLateral', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
        // trasnform: 'translateY(-30%)''
        // transform: 'rotate(150deg)'
      }),
      animate('300ms ease-in', style({
        opacity: 1,
        transform: 'translateX(100%)'
        // transform: 'translateY(0)'
        // transform: 'rotate(0deg)'
      }))
    ])
  ])
