import { Address } from "./address";
import { Company } from "./company";

export class User{
    id: number = 0;
    name: string = '';
    username: string = '';
    email: string = '';
    address: Address = { 
        street:  '',
        suite: '',
        city:  "",
        zipcode: "",
        geo: { 
            lng: '', 
            lat: '' 
        }
    };
    phone: string = '';
    website: string = '';
    company: Company = {
        name: '',
        catchPhrase: '',
        bs: ''
    };
}