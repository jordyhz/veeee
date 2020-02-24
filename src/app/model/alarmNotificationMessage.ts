export interface alarmNotificationMessage {
    notificationId: number;
    alarmId : number ; //master id 
    title : string ;
    name : string ;
    wpPhone : string ;
    email : string ;
    isWpActive : boolean ;
    isMailActive : boolean ;
    userId : number ;  
  }