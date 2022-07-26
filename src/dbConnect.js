import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export function dbConnect() {
    if (!getApps().length) {  // if it is false, it's not connected
        initializeApp({
            credential: cert(credentials)
        });
    }
return getFirestore()
}