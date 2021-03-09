import { Component, OnInit } from '@angular/core';
/**
 * Facilities Page Component
 */
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  /**
   * Facilities Object Array
   * @type {Array[Object]}
   */
  facilities = [
    {
      id: 501,
      name: 'Restaurant and Bars',
      subTitle: 'Captains Bar',
      image: 'assets/images/hotel_information_-_facilities/u515.png',
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
      name: 'Spa and Health Center',
      subTitle: 'Captains Bar',
      image: 'assets/images/hotel_information_-_facilities/u515.png',
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
      name: 'Front Office',
      subTitle: 'Captains Bar',
      image: 'assets/images/hotel_information_-_facilities/u515.png',
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
      name: 'Business Center',
      subTitle: 'Captains Bar',
      image: 'assets/images/hotel_information_-_facilities/u515.png',
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
   * Return the header setting the Id as a string with header concattenated to it
   *
   * @param  {number} i
   * @returns string
   */
  getHeadId(i: number): string {
    return 'header' + i.toString();
  }
}
