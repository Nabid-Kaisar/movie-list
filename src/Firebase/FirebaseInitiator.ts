// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { firebaseConfig } from '@/credentials/Firebase.ts'

export const initiateFirebase = async () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const docRef = doc(db, 'movies-list', 'interstellar')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }

  // return { app, db }
  // const analytics = getAnalytics(app)
}
