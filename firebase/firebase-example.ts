import { collection, DocumentReference, getDocs, query, where } from "firebase/firestore";
import { Firestore } from 'firebase/firestore';

import { db } from "./config/firebase";
import { Food, User } from "./types/types";

async function getUsers(db: Firestore) {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
}

async function getUser(db: Firestore, name: string){
    const usersCol = collection(db, "users");
    const q = query(usersCol, where("name", "==", name));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        console.warn(`No user found with name: ${name}`);
        return null;
    }

    return snapshot.docs[0].ref;
}

async function addUser(db: Firestore, user: User){
    //add new user to user collection
}

async function removeUser(db: Firestore, user: DocumentReference){
    //remove user from the user collection
}

async function getFoods(db: Firestore){
    //get all documents in food collection
}

async function getFood(db: Firestore, name: string){
    //get DocumentReference to a food
}

async function addFood(db: Firestore, food: Food){
    //add new food to food collection
}

async function addOrder(db: Firestore, userName: DocumentReference, order: DocumentReference){
    //add an existing food to existing 
}

async function main(){
    //retrieve users
    const data = await getUsers(db)
    console.log(data)


    //add a new food to the food collection and output the updated food collection


    //get a DocumentReference to the new food

    
    //add your favorite character to the user collection, add reference above to their "orders", and output the updated collection


    //get your neighbor's user entry


    //remove your neighbor from the user collection :(


    //output updated user collection
}

main();