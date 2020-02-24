import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//@Injectable()
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private customerIdSource = new BehaviorSubject<number>(0);
  currentCustomerId = this.customerIdSource.asObservable()

  constructor() { }

  changeCustomerId(customerId) {
    this.customerIdSource.next(customerId);
  }
}
