import { addDoc, arrayUnion, collection, deleteDoc, DocumentReference, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
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

//add new user to user collection
async function addUser(db: Firestore, user: User){
    const usersCol = collection(db, "users");
    await addDoc(usersCol, {
        ...user,
        order: user.orders ?? []
    })
}

//remove user from the user collection
async function removeUser(user: DocumentReference){ // just need a ref to data doc, pointer
    await deleteDoc(user); // could just delete directly, like below
}

//get all documents in food collection
async function getFoods(db: Firestore){
    const foodCollection = collection(db, 'food');
    const foodSnapshot = await getDocs(foodCollection);
    const foodList = foodSnapshot.docs.map(doc => doc.data());
    return foodList;
}

//get DocumentReference to a food
async function getFood(db: Firestore, name: string){
    const foodCollection = collection(db, "food");
    const q = query(foodCollection, where("name", "==", name));
    const snapshot = await getDocs(q); // returns query snapshot, what matches query

    if (snapshot.empty) {
        console.warn(`No food found with name: ${name}`);
        return null;
    }

    return snapshot.docs[0].ref; // return pointer to the first found 
}

//add new food to food collection
async function addFood(db: Firestore, food: Food){
    const foodCollection = collection(db, "food");
    await addDoc(foodCollection, food); // would return doc ref or promise doc ref if you want to use it
}

//add an existing food to existing 
async function addOrder(userName: DocumentReference, order: DocumentReference){
    await updateDoc(userName, {
        order: arrayUnion(order) // if it was order: arrayUnion(order), it creates a new field?
    });
}

async function main(){
    //retrieve users
    const userList = await getUsers(db)
    console.log(userList)

    // get document reference to first instance of "Angela" found or null
    const userReference = await getUser(db, "Angela");
    console.log(userReference);

    if (userReference){
        // if user was found, retrieve the ACTUAL document's information, not just the reference
        const angelaInfo = (await getDoc(userReference)).data();
        console.log(angelaInfo);
    }

    //add a new food to the food collection and output the updated food collection
    

    //get a DocumentReference to the new food

    
    //add your favorite character to the user collection, add reference above to their "orders", and output the updated collection
    const newCharacter: User = {
        address: "China",
        name: "Po",
        orders: [],
        phoneNumber: "1000000000"
    };

    await addUser(db, newCharacter);

    //get your neighbor's user entry
    const neighborRef = await getUser(db, "Angela N");

    //remove your neighbor from the user collection :(
    if (neighborRef){
        await deleteDoc(neighborRef);
        console.log("Deleted.");
    } else {
        console.log("Not found.");
    }

    //add a food to someone's order
    const newFoodRef = await getFood(db, "Buko Pandan");
    const userRef2 = await getUser(db, "Angela N.");

    if (userRef2 && newFoodRef){
        await addOrder(userRef2, newFoodRef);
    }

    //output updated user collection
    const updatedUsers = await getUsers(db);
    console.log(updatedUsers);
}

main();
// npx tsx firebase-example.ts