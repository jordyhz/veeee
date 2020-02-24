import { ListOfValue } from './listOfValue';

export interface alarmNotification{
  alarmId: number;
  notName : string ;
  notDesc : String ;
  customerId : number ;
  tagId :  ListOfValue ;
  notCheck : ListOfValue ;
  thresholdValue : number ;
  period : ListOfValue ;
  notLevel : ListOfValue ;
  isActive : boolean ;
  isDeleted : boolean ;
  userId : number ;
}