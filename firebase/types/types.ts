import { DocumentReference } from "firebase/firestore";

export interface User{
    address: string;
    name: string;
    orders?: DocumentReference<Food>[]
    phoneNumber: string;
}

export interface Food{
    calories: number;
    ingredients: string[];
    name: string;
}

