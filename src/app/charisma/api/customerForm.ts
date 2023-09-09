import {Country} from "./country";


export interface Representative {
    name?: string;
    image?: string;
}

export class CustomerForm {
    customerFormId  ?: number;
    company ?: string;
    code ?: string;
    male ? : string;
    firstname ?: string;
    surname ?: string;
    telefon ?: number;
    email ?: string;
    birthdate ?:  Date ;
    familyCount ?: string;
    question ?: string;
    question1 ?: string;
    ort?: Country;
    plz?: number;
    strasse ?: string;




}
