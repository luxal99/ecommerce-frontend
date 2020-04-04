import { UserAddress } from "./UserAddress"

export class Company{
    idCompany?
    idUserAddress : UserAddress;
    title;

    constructor(idCompany?){
        this.idCompany = idCompany;
    }
}