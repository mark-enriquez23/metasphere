import { ViewChild } from '@angular/core';
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
  @ViewChild('stepOne') stepOne;
  @ViewChild('stepTwo') stepTwo;
  @ViewChild('stepThree') stepThree;
  @ViewChild('stepFour') stepFour;
  @ViewChild('stepFive') stepFive;
  @ViewChild('stepSix') stepSix;

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
    console.log(this.stepFive)
    if (e===5 && this.stepFive) {
      console.log('end')
    }
  }

  submitGuestInformation(): void {
    const stepThreeData = this.stepThree.stepThreeForm.control.values;
    console.log(stepThreeData)
    const guestData = {
      // confirmationNumber: data.confirmationNumber,
      // Lastname: data.Lastname,
      // FirstName: data.FirstName,
      // CheckinDate: data.CheckinDate,
      // CheckoutDate: data.CheckoutDate,
      // TotalRoomNight: data.TotalRoomNight,
      // roomTypeShortDescription: data.roomTypeShortDescription,
      // NumberofAdult: data.NumberofAdult,
      // NumberofChild: data.NumberofChild,
      // RoomRate: data.RoomRate,
      // PaymentMethod: data.PaymentMethod,
      // GenderCode: data.GenderCode,
      // DateOfBirth: data.DateOfBirth,
      // DocumnetType: data.DocumnetType,
      // DocumentNumber: data.DocumentNumber,
      // NationalityCode: data.NationalityCode,
      // BirthPlace: data.BirthPlace,
      // IssueDate: data.IssueDate,
      // ExpiryDate: data.ExpiryDate,
      // Mobile: data.Mobile,
      // Email: data.Email,
      // ShareFirstName: data.ShareFirstName,
      // ShareLastname: data.ShareLastname,
      // ShareGenderCode: data.ShareGenderCode,
      // ShareDateOfBirth: data.ShareDateOfBirth,
      // ShareDocumnetType: data.ShareDocumnetType,
      // ShareDocumentNumber: data.ShareDocumentNumber,
      // ShareNationalityCode: data.ShareNationalityCode,
      // ShareBirthPlace: data.ShareBirthPlace,
      // ShareIssueDate: data.ShareIssueDate,
      // ShareExpiryDate: data.ShareExpiryDate,
      // ifPASSPORT: data.ifPASSPORT,
      // ifPOS: data.ifPOS,
      // ifFACE: data.ifFACE,
      // status: data.status,
      // imgId: data.imgId,
      // faceimgId: data.faceimgId,
      // ShareimgId: data.ShareimgId,
    }
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
