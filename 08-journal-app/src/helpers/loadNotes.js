import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const loadNotes = async ( uid ) => {

    const notesSnap = await getDocs( collection( db, `${uid}/journal/notes` ) );
    const notes = [];

    notesSnap.forEach( snapChild => {
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    })

    console.log(notes);

    return notes;

}