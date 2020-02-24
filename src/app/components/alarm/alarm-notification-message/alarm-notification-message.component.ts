import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { alarmNotificationMessage } from 'src/app/model/alarmNotificationMessage';
import { NgForm } from '@angular/forms';
import { AlarmNotificationService } from 'src/app/shared/alarm-notification.service';


@Component({
  selector: 'app-alarm-notification-message',
  templateUrl: './alarm-notification-message.component.html',
  styleUrls: ['./alarm-notification-message.component.scss']
})
export class AlarmNotificationMessageComponent implements OnInit {
  
  formData: alarmNotificationMessage;
  isValid:boolean=true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AlarmNotificationMessageComponent>,
    private alarmNotificationService:AlarmNotificationService
  ) { }

  ngOnInit() {
    if(this.data.alarmNotificationMessageIndex == null)
    this.formData ={
      notificationId:null,
      alarmId: this.data.alarmId,
      title:'',
      name:'',
      wpPhone:'',
      email:'',
      isWpActive:false,
      isMailActive:false,
      userId:this.data.userId,
    }
    else
    this.formData = Object.assign({},this.alarmNotificationService.alarmNotificationMessage[this.data.alarmNotificationMessageIndex]);
  }

  onSubmit(form:NgForm){
    if (this.validateForm(form.value)) {
      if (this.data.alarmNotificationMessageIndex == null)
        this.alarmNotificationService.alarmNotificationMessage.push(form.value);
      else
        this.alarmNotificationService.alarmNotificationMessage[this.data.alarmNotificationMessageIndex] = form.value;
      this.dialogRef.close();
  }
}

  validateForm(formData:alarmNotificationMessage){
    this.isValid=true;
    
    return this.isValid;
  }

}
