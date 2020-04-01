import { Client } from "./Client"
import { Company } from "./Company"
import { UserType } from "./UserType"
import { UserAddress } from "./UserAddress"

export class User {
    idUser?
    username
    password
    idUserType: UserType
}

export class UserModel {

    userModel: [
        { userAddress : UserAddress },
        { client:Client },
        { user:User}

    ]
}
