import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArIqywk0cVY1FGGQbu5faHOu1f-UqqOUs",
    authDomain: "customer-disclosures.firebaseapp.com",
    databaseURL: "https://customer-disclosures-default-rtdb.firebaseio.com",
    projectId:"customer-disclosures",
    storageBucket:"customer-disclosures.appspot.com",
    messagingsenderId:"791399882697",
    appId:"1:791399882697:web:3abe9e63b68d4aedcc1218",
    measurementId:"G-XPBC3R4JZ9",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);