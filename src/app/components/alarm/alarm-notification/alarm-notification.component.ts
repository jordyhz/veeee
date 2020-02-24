import { Component, OnInit } from '@angular/core';
import { AlarmNotificationService } from 'src/app/shared/alarm-notification.service';
import { NgForm } from '@angular/forms';
import { ListOfValue } from 'src/app/model/listOfValue';
import { AlarmNotificationMessageComponent } from '../alarm-notification-message/alarm-notification-message.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
declare const myTest: any;

@Component({
  selector: 'app-alarm-notification',
  templateUrl: './alarm-notification.component.html',
  styleUrls: ['./alarm-notification.component.scss']
})
export class AlarmNotificationComponent implements OnInit {
  
  isValid:boolean=true;


  constructor(public service: AlarmNotificationService,
    private dialog: MatDialog,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    this.resetForm();
  }

  onClick() {
    myTest();
  }

    resetForm(form?:NgForm){ 
      if(form = null)
      form.resetForm();
      this.service.formData={
        alarmId: null,
        notName: '',
        notDesc: '',
        customerId: 1234,
        tagId: '' as unknown as ListOfValue,
        notCheck: '' as unknown as ListOfValue,
        thresholdValue: 0,
        period: '' as unknown as ListOfValue,
        notLevel: '' as unknown as ListOfValue,
        isActive: false,
        isDeleted: false,
        userId: null, 
      };
      this.service.alarmNotificationMessage=[];

      console.log(this.service.alarmNotificationMessage);
    }

    AddOrEditNotification(alarmNotificationMessageIndex,alarmId){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose= true;
      dialogConfig.width="50%";
      dialogConfig.height="100%";
      dialogConfig.data={alarmNotificationMessageIndex,alarmId};
      this.dialog.open(AlarmNotificationMessageComponent,dialogConfig);
    }

    onDeleteNotificationMessage(notificationId:number,i:number){
      this.service.alarmNotificationMessage.splice(i,1);
    }

    validateForm(){
      this.isValid=true;
      if(this.service.formData.customerId=null)
      this.isValid=false;
      else if(this.service.formData.notName='')
      this.isValid=false;
      else if(this.service.formData.notDesc='')
      this.isValid=false;
      else if(this.service.formData.tagId=''  as unknown as ListOfValue)
      this.isValid=false;
      else if(this.service.formData.notCheck=''  as unknown as ListOfValue)
      this.isValid=false;
      else if(this.service.formData.thresholdValue=null)
      this.isValid=false;
      else if(this.service.formData.period=''  as unknown as ListOfValue)
      this.isValid=false;
      else if(this.service.formData.notLevel=''  as unknown as ListOfValue)
      this.isValid=false;
      return this.isValid;
    }

    onSubmit(form:NgForm){
      //   if(this.validateForm())
      //   {
      //     this.service.saveOrUpdateOrder().subscribe(res =>{
           this.resetForm();
      this.toastr.success('Submitted succesfully','Observer App');
      // this.router.navigate(['/'])
      //     })
      //   }
       }
}
