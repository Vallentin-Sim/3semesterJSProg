import { initializeApp } from '@firebase/app'
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import express from 'express'

/*
Kaj anbefaling for opgaver:
1. Simpel HTML side med et form til at tilføje en bruger og en knap til at hente alle brugere.
2. Lektion 16 med biler, hvor man anvender firebase.
3. Chat projektet, hvor istedet for JSON så laves der en firebase database. 
*/

const app = express()
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RCauXfSW-GRSEgckQOcCeI7CRkf1ovE",
  authDomain: "semestertest-a2066.firebaseapp.com",
  projectId: "semestertest-a2066",
  storageBucket: "semestertest-a2066.firebasestorage.app",
  messagingSenderId: "817942709783",
  appId: "1:817942709783:web:04da37d63533380c9cbe52"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const usersCollection = collection(db, 'users')

class User {
    constructor(username, type, id) {
        this.username = username
        this.type = type
        this.id = id
    }
}

const userConverter = {
    toFireStore: (user) => {
        return {
            username: user.username,
            type: user.type
        }
    },
    fromFireStore: (snapshot, options) => {
        const data = snapshot.data(options)
        return new User(data.username, data.type, snapshot.id)
    }
}

// TODO skal lige fikse denne
async function getUsers() {
    let usersQuerysDocs = await getDocs(usersCollection.withConverter(userConverter))
    //Her kunne der os have været brugt et forloop
  //  let users = usersQuerysDocs.docs.map( doc => {
  //  let data = doc.data()
  //  data.docID = doc.id
  //  return data
  //})
  let users = []
  usersQuerysDocs.forEach(docSnapshot => {
    let data = docSnapshot.data()
    users.push(data)
  })
    console.log(users);
}

async function getUser(id){
    const docRef = doc(db, 'users', id)
    const userQueryDoc = await getDoc(docRef)
    let user = userQueryDoc.data()
    user.docID = userQueryDoc.id
    return user
}

async function addUser() {
    const newUser = {username: 'ole Olsen', type: 'Professor'}
    let docRef = await addDoc(usersCollection, newUser)
    console.log('Ole olsen fik ID: ', docRef.id);
}

async function deleteUser(id) {
    const docRef = doc(db, 'users', id)
    await deleteDoc(docRef)
    console.log('User deleted with ID: ', id);
}

async function editUser(userName, type, id) {
    const docRef = doc(db, 'users', id)
    if (type === undefined || type === '') {
        const newData = {username: userName}
        await updateDoc(docRef, newData)
        console.log('User edited with ID: ', id);
        return
    }
    const newData = {username: userName, type: type}
    await updateDoc(docRef, newData)
    console.log('User edited with ID: ', id);
}

getUser('uxKpFDlMSGDD8oRGUd2l').then(user => console.log(user))

getUser('9g2q1lyAokuNLveZQ6K6').then(user => console.log(user))