import { ObjectId } from "mongodb";

export interface UserDataObj {
    name: string,
    email: string,
    password: string;
}

export interface UserType {
    name: string,
    email: string,
    password: string,
    _id: ObjectId,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export interface CredentialsType {
    email: string,
    password: string
}

export interface ExerciseType {
    name: string,
    type: string,
    muscle: string,
    grip: string,
    width: string
}
