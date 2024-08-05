import {ObjectId} from "mongodb";

export type UserType = {
    _id: ObjectId,
    username: string,
    password: string,
    email: string,
    is_sub: boolean,
    tokens: number,
    last_tokens_used: string
}

export type UserConnectionType = {
    email: string,
    password: string
}

export type UserInscriptionType = {
    username: string,
    email: string,
    password: string
}
