import { Client } from "./Client"
import { Company } from "./Company"
import { UserType } from "./UserType"
import { UserAddress } from "./UserAddress"

export class User {
    idUser?
    username
    password
    idUserType: UserType;
    idClient:Client;
    idCompany:Company;

    constructor(username?,password?){
        this.username = username;
        this.password = password;
    }
    
}

export class UserModel {

    userModel: [
        { userAddress : UserAddress },
        { client:Client },
        { user:User}

    ]
}
