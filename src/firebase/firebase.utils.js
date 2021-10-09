import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkkVJ0P9PUONq9_zKLMd4uo70_KWKsPj4",
    authDomain: "crowndb-e2695.firebaseapp.com",
    projectId: "crowndb-e2695",
    storageBucket: "crowndb-e2695.appspot.com",
    messagingSenderId: "945694486847",
    appId: "1:945694486847:web:8007ff5b1b16130c92238a",
    measurementId: "G-GD9GKZ3G3N"
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    
    const batch = firestore.batch()

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map((doc) => {
        const {title, items} = doc.data()
        

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            items,
            title
        }
    })

    console.log(transformedCollection)

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        // Create user
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('Something error when creating user', error)
        }
    }

    return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;