import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    transition(':enter', [
      style({
        opacity: 0,
        // trasnform: 'translateY(-30%)''
        // transform: 'rotate(150deg)'
      }),
      animate('400ms linear', style({
        opacity: 1,
        // transform: 'translateY(0)'
        // transform: 'rotate(0deg)'
      }))
    ])
  ])
