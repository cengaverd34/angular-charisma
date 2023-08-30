import {CustomerDetail} from "./customerDetail";
import {Address} from "./address";
import {Country} from "./country";


export interface Representative {
    name?: string;
    image?: string;
}

export class CustomerForm {
    customer_id?: number;
    company?: string;
    date?: string;
    status?: string;
    verified?: string;
    balance?: string;
    activity?: string;
    representative?: Representative;
    country?: ({ code: string; countryName: string } | { code: string; countryName: string } | {
        code: string;
        countryName: string
    } | { code: string; countryName: string } | { code: string; countryName: string } | {
        code: string;
        countryName: string
    } | { code: string; countryName: string } | { code: string; countryName: string } | {
        code: string;
        countryName: string
    } | { code: string; countryName: string })[];
    address?: Address;
    customerDetails?: CustomerDetail;


}
