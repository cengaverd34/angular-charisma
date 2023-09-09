import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer} from 'src/app/charisma/api/customer';
import {Observable} from "rxjs";
import {CustomerForm} from "../api/customerForm";
import {Country} from "../api/country";
import {AbstractControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";


@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    constructor(private http: HttpClient) { }
    private baseURL = "http://localhost:9090/api/v1/addCustomerForm";
    private baseURLCountry = "http://localhost:9090/api/v1/getAllCountries";

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
    public addCustomerForm(customerForm: CustomerForm):Observable<Object>{
        return this.http.post(`${this.baseURL}`, customerForm);
    }

    getOrtList(code: number | undefined): Observable<Country>{
        return this.http.get<Country>(`${this.baseURLCountry}/${code}`);
    }

    public addCustomerFake(customerForm: CustomerForm): Observable<CustomerForm>{
        return this.http.post<CustomerForm>("http://localhost:9090/", customerForm);
    }


}
