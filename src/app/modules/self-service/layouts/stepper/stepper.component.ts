import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

/**
  * Stepper Component
  */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  /**
   * Check In Form
  * @type {FormGroup}
  */
  checkInForm: FormGroup;


  /**
   * Stepper Label Message
  * @type {String}
  */
  stepperMessage: String = '';

   /**
    * Room Server Listing Data
    *
    * @type {any}
    */
    roomServerListingData: any;

   /**
    * Nationalities Data
    *
    * @type {any}
    */
    nationalitiesData: any;

  /**
  * @ignore
  */
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private generalService: GeneralService,
    private mainCategoryService: MainCategoryService,
    private roomServerListingService: RoomServerListingService
  ) {
    if (this.activateRoute.snapshot.data.stepperData) {
      const stepperData = this.activateRoute.snapshot.data.stepperData
      this.roomServerListingService.roomServerItemisting.next(stepperData[0])
      this.nationalitiesData = stepperData[1];
      this.roomServerListingService.roomServerItemisting.subscribe((res: any) => {
        console.log(res)
        this.roomServerListingData = res
      })
    } else {
      console.log('err')
    }
  }

  /**
  * @ignore
  */
  ngOnInit(): void {
    this.setStepperMessage(0);
  }


  /**
   * On Step Change - sets the stepper Message
   *
   * @param  {any} e - The event to check
   * @returns void
   */
  onStepChange(e: any): void {
    this.setStepperMessage(e.selectedIndex);
  }


  /**
   * Set's the Stepper Label Message
   *
   * @param  {number} index - The index to check
   * @returns void
   *
   */
  setStepperMessage(index: number): void {
    let message = ''
    switch (index) {
      case 0:
        message = 'Welcome to our pre check-in! Please verify the details below.'
        break;

      case 1:
        message = 'Why not treat yourself to something nice and make your stay perfect for that special ocasion.'
        break;

      case 2:
        message = 'Please enter the following information.'
        break;

      case 3:
        message = 'Please upload the following documents.'
        break;

      case 4:
        message = 'Almost there... Please enter the following information.'
        break;

      case 5:
        message = 'Please enter the following information. Note we may not be able to accomodate every special request.'
        break;

      default:
        break;
    }
    this.stepperMessage = message;
  }

}
