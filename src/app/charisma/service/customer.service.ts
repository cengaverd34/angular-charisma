import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/charisma/api/customer';
import {Observable} from "rxjs";
import {Product} from "../api/product";
import {CustomerForm} from "../api/customerForm";

@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/charisma/data/customers-small.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/charisma/data/customers-medium.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/charisma/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }
    public addCustomer(customerForm: CustomerForm): Observable<CustomerForm>{
        return this.http.post<CustomerForm>("http://localhost:9090/addNewCustomerForm", customerForm);
    }


}
