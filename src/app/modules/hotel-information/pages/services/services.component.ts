import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      id: 501,
      name: 'Concierge Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 301,
      name: 'Laundry and Valet Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 5101,
      name: 'Shoeshine Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 5401,
      name: 'Wake up call',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 54201,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 11501,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 53201,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 5023231,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 2234501,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 5034341,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    },
    {
      id: 5343401,
      name: 'Other misc. service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      opening_hours: [
        {
          from: 'Monday',
          to: 'Friday',
          time_from: '17:00',
          time_to: '17:00'
        },
        {
          from: 'Saturday',
          to: 'Sunday',
          time_from: '17:00',
          time_to: '17:00'
        }
      ],
      floor: 2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  /**
   *
   * @param i Get the id of the object being passed
   *
   * @description Return the header setting the Id as a string with header concattenated to it
   *
   */
  getHeadId(i) {
    return 'header' + i.toString();
  }

}
