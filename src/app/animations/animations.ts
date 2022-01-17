// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

    export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi transparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                transform: 'translateX(-400%)',
                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('1s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                transform: 'translateX(0)',
                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('2s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                transform: 'translateX(400%)',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);

    export const fadeAnimation = trigger('fade', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition('false => true', animate('500ms ease-in-out'))
      ])

    export const slideAnimation = trigger('slide', [
        state('false', style({ transform: 'translateX(-100%)' })),
        state('true', style({ transform: 'translateX(0%)' })),
        transition('false => true', animate('1000ms ease-in-out'))
      ])