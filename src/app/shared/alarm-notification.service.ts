import { Injectable } from '@angular/core';
import { alarmNotification } from '../model/alarmNotification';
import { alarmNotificationMessage } from '../model/alarmNotificationMessage';

@Injectable({
  providedIn: 'root'
})
export class AlarmNotificationService {
 
  formData: alarmNotification;
  alarmNotificationMessage: alarmNotificationMessage[];

  constructor() { }
}
