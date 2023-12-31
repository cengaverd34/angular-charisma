import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {
    faCircleCheck,
    faEnvelope,
    faEnvelopeOpen, faLocationDot,
    faMobileScreen,
    faPerson,
    faPersonDress
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {CustomerService} from "../../service/customer.service";
import {CustomerForm} from "../../api/customerForm";


@Component({
    templateUrl: './sanachoicelanding.component.html',
})
export class SanachoicelandingComponent implements OnInit {
    countries: CustomerForm[] = [];
    customer: CustomerForm = new CustomerForm();

    value7: any;
    constructor(private customerservice:CustomerService,library: FaIconLibrary) {
        library.addIcons(faEnvelope,faPersonDress,faPerson,faEnvelopeOpen,faCircleCheck,faMobileScreen,faLocationDot);
    }
    scrollToElement($element: any): void {
        console.log($element);
        setTimeout(() => {
            $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 200);

    }

    ngOnInit(): void {
        //
        // this.customer.country = [
        //     {countryName: 'Australia', code: 'AU'},
        //     {countryName: 'Brazil', code: 'BR'},
        //     {countryName: 'China', code: 'CN'},
        //     {countryName: 'Egypt', code: 'EG'},
        //     {countryName: 'France', code: 'FR'},
        //     {countryName: 'Germany', code: 'DE'},
        //     {countryName: 'India', code: 'IN'},
        //     {countryName: 'Japan', code: 'JP'},
        //     {countryName: 'Spain', code: 'ES'},
        //     {countryName: 'United States', code: 'US'}
        // ];
    }

    saveCustomer(){
        this.customerservice.addCustomer(this.customer).subscribe( data =>{

                console.log("I am hire coding ");
                console.log(data);
            },
            error => console.log(error));
    }


}
