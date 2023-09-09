import {Component, OnInit} from '@angular/core';
import {
    faBirthdayCake,
    faCircleCheck,
    faEnvelope,
    faEnvelopeOpen, faExclamationTriangle, faInfoCircle, faLocationCrosshairs,
    faLocationDot, faMailBulk,
    faMap,
    faMobileScreen,
    faPerson,
    faPersonDress, faUser, faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {CustomerService} from "../../service/customer.service";
import {CustomerForm} from "../../api/customerForm";
import { MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidator} from "./email-validator.directive";
import {Country} from "../../api/country";




@Component({
    templateUrl: './sanachoiceLanding.component.html',
    providers: [MessageService],

})


export class SanachoiceLandingComponent implements OnInit {


    // @ts-ignore
    country: Country[{}];
    reactiveForm!: FormGroup;

    customerForm: CustomerForm = new CustomerForm();

    constructor(
        private messageService: MessageService,
        private customerService: CustomerService,
        private library: FaIconLibrary) {
        library.addIcons(faUser, faExclamationTriangle, faUserPlus, faBirthdayCake, faInfoCircle, faUser, faMailBulk, faMap, faEnvelope,
            faPersonDress, faPerson, faLocationCrosshairs, faEnvelopeOpen, faCircleCheck, faInfoCircle, faMobileScreen, faLocationDot);
    }



    saveCustomer() {

        if (this.reactiveForm.invalid) {
            for (const control of Object.keys(this.reactiveForm.controls)) {
                this.reactiveForm.controls[control].markAsTouched();
            }
            return;
        }
        // console.log("I am hire Save Customer end  ", JSON.stringify(this.reactiveForm.value));
        // const myObj = JSON.parse(this.reactiveForm.get("ort")?.value);
        // console.log("I am hire Save Customer ort:   " +myObj['ort']);

        this.messageService.clear();
        this.messageService.add({severity:'success', summary:'Vielen Dank für Ihre Anfrage.', detail:'Sie werden in Kürze von unserem Partner kontaktiert.'});
        this.customerService.addCustomerForm(this.reactiveForm.value).subscribe(data => {
        }, error => console.log(error));
        this.messageService.add({key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1'});
    }


    get ort() {

        return this.reactiveForm.get('ort')!;
    }

    get question1() {
        return this.reactiveForm.get('question1')!;
    }

    get question() {
        return this.reactiveForm.get('question')!;
    }

    get familyCount() {
        return this.reactiveForm.get('familyCount')!;
    }

    get birthdate() {
        // @ts-ignore
        return this.reactiveForm.get('birthdate').patchValue(this.formatDate(new Date()));

    }

    get male() {
        return this.reactiveForm.get('male')!;
    }

    get firstname() {
        return this.reactiveForm.get('firstname')!;
    }

    get surname() {
        return this.reactiveForm.get('surname')!;
    }

    get strasse() {
        return this.reactiveForm.get('strasse')!;
    }

    get plz() {
        return this.reactiveForm.get('plz')!;
    }



    get telefon() {
        return this.reactiveForm.get('telefon')!;
    }

    get email() {
        return this.reactiveForm.get('email')!;
    }


    // @ts-ignore

    ngOnInit(): void {

        this.reactiveForm = new FormGroup({
            male: new FormControl(this.customerForm.male, [
                Validators.required
            ]),
            firstname: new FormControl(this.customerForm.firstname, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(250),
            ]),
            surname: new FormControl(this.customerForm.surname, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(250),
            ]),
            strasse: new FormControl(this.customerForm.strasse, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(250),
            ]),
            plz: new FormControl(this.customerForm.plz, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(4),
            ]),
            ort: new FormControl(this.customerForm.ort, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(250),
            ]),
            telefon: new FormControl(this.customerForm.telefon, [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
            ]),
            email: new FormControl(this.customerForm.email, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(250),
                emailValidator(),
            ]),
            birthdate: new FormControl(this.customerForm.birthdate, [
                Validators.required,
            ]),
            familyCount: new FormControl(this.customerForm.familyCount, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(5),
            ]),
            question: new FormControl(this.customerForm.question, [
                Validators.required
            ]),
            question1: new FormControl(this.customerForm.question1, [
                Validators.required
            ]),
        });
    }

    numberOnly(event: { which: any; keyCode: any; }): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

    getOrtList(event: Event): boolean {

        if(!this.customerForm.plz || this.customerForm.plz> 999 ){
            this.customerService.getOrtList (this.customerForm.plz).subscribe( data => {
                this.country = data
            });
        }
        return  this.country;
    }


    scrollToElement($element: any): void {
        console.log($element);
        setTimeout(() => {
            $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 200);
    }

    private formatDate(date: Date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }



}
