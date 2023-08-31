import {Component, OnInit, TemplateRef} from '@angular/core';
import {
    faBirthdayCake,
    faCircleCheck,
    faEnvelope,
    faEnvelopeOpen, faInfoCircle, faLocationCrosshairs,
    faLocationDot, faMailBulk,
    faMap,
    faMobileScreen,
    faPerson,
    faPersonDress, faUser, faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {CustomerService} from "../../service/customer.service";
import {CustomerForm} from "../../api/customerForm";
import { Message } from 'primeng/api';

import {library} from "@fortawesome/fontawesome-svg-core";



@Component({
    templateUrl: './sanachoicelanding.component.html',
})
export class SanachoicelandingComponent implements OnInit {
     customerForm: CustomerForm = new CustomerForm();
    messages: Message[] | undefined;


    constructor(private customerService:CustomerService,library: FaIconLibrary) {
        library.addIcons(faUser,faUserPlus,faBirthdayCake,faInfoCircle,faUser,faMailBulk, faMap,faEnvelope,
            faPersonDress,faPerson,faLocationCrosshairs,faEnvelopeOpen,faCircleCheck,faInfoCircle,faMobileScreen,faLocationDot);
    }
    scrollToElement($element: any): void {
        console.log($element);
        setTimeout(() => {
            $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 200);

    }saveCustomer(){
        console.log("I am hire coding "+JSON.stringify( this.customerForm ));
        this.customerService.addCustomer(this.customerForm).subscribe( data =>{
                this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];

            }
            ,
            error => console.log(error));
    }
    ngOnInit(): void {
    }

    // protected readonly faLocationDot = faLocationDot;
    // protected readonly faPerson = faPerson;
    // protected readonly faMap = faMap;
    // protected readonly faInfoCircle = faInfoCircle;
    // protected readonly faLocationCrosshairs = faLocationCrosshairs;
    // protected readonly faMobileScreen = faMobileScreen;
    // protected readonly faMailBulk = faMailBulk;
    // protected readonly faEnvelopeOpen = faEnvelopeOpen;
    // protected readonly faBirthdayCake = faBirthdayCake;
    // protected readonly faUserPlus = faUserPlus;
    // protected readonly faUser = faUser;

}
