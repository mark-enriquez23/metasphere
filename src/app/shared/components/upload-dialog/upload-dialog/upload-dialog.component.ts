import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Observable } from 'rxjs';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';
import { SaveDocumentsService } from 'src/app/shared/services/self-service/save-documents/save-documents.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  files: any;
  content = {
    message : ''
  }
  progressInfos: any[] = [];
  message: string[] = [];
  user: any
  fileInfos?: Observable<any>;
  public uploadValidated = true;

  constructor(public ref: DialogRef,
    private preCheckinService: PreCheckinService,
    private saveDocumentsService: SaveDocumentsService) {
    this.user = this.preCheckinService.userBooking;
    this.files = this.ref.data.files;
    console.log(this.files)

    this.message = [];

    for (let index = 0; index < this.files.length; index++) {
      const element = this.files[index];
      if(!element.document) {
        this.uploadValidated = false;
      }
    }

    if (this.files.length > 0 && this.uploadValidated) {
      for (let i = 0; i < this.files.length; i++) {
        this.upload(i, this.files[i]);
      }
    }
  }

  ngOnInit(): void {}

  confirm(): void {
    for (let index = 0; index < this.progressInfos.length; index++) {
      const element = this.progressInfos[index];
      if (element.value<100) {
        this.ref.close()
      }
    }
    this.ref.close({confirmed: true})
  }

  upload(idx: number, file: any): void {
    console.log(file)
    this.progressInfos[idx] = { value: 0, fileName: file.document.name };
    var current = 0
    // repeating timer which updates every 4 secs
    var updater = setInterval(() => {
      if(current >= 100)
          clearInterval(updater);
      // update by 5/90th
      else {
        var updateAmount = (5/90) * 100;
        current += updateAmount;
        this.progressInfos[idx].value = current;
      }
    },4000);

    if (file) {
      this.saveDocumentsService.saveDocuments(file, this.user.confirmation_number).subscribe(
        (event: any) => {
          if (event.resultMessage === 'error') {
            clearInterval(updater)
            this.progressInfos[idx].value = 0;
            const msg = 'Could not upload the file: ' + file.document.name;
            this.message.push(msg);
          } else {
            current = 100;
            this.progressInfos[idx].value = 100;
            const msg = 'Uploaded the file successfully: ' + file.document.name;
            this.message.push(msg);
          }
        });
    }
  }
}
