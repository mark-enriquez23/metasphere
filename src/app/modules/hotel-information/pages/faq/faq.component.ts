import { Component, OnInit } from '@angular/core';

/**
 * Faq Component
 */
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  /**
   * Faqs
   * @type {Array[Object]}
   */
  faqs = [
    {
      type: 'Check-in/Checkout',
      id: 501,
      items: [
        {
          id: 12,
          name: 'At what time can I checkout in?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          additional: [
            {
              type: 'Check in time',
              value: '01:00 PM'
            }
          ]
        },
        {
          id: 32,
          name: 'When do I need to check out?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          additional: [
            {
              type: 'Check out time',
              value: '11:00 AM'
            }
          ]
        },
      ],

    },
    {
      type: 'Reservations',
      id: 301,
      items: [
        {
          id: 41,
          name: 'Can I upgrade my room?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 22,
          name: 'Is breakfast included?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 311,
          name: `I can't find my reservation details`,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 432,
          name: 'What is the cancellation policy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
      ],
    },
    {
      type: 'Surroundings',
      id: 431,
      items: [
        {
          id: 441,
          name: 'What are the directions to the?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 25,
          name: 'Are ther any public transportation?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 34,
          name: `Can I drive to the hotel`,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        }
      ],
    },
  ]

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }


  /**
   * Returns the header string id
   *
   * @param  {number} i
   * @returns string
   */
  getHeadId(i: number): string {
    return 'header' + i.toString();
  }
}
