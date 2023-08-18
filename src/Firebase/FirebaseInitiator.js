// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { firebaseConfig } from '@/credentials/Firebase.ts'

let app
let db

export const initiateFirebase = async () => {
  // Initialize Firebase
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)

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

export const getMovieList = () => {}
export const addMovie = async (movieData) => {
  await setDoc(
    doc(db, 'movies-list', `${movieData.movieName} (${movieData.releasedYear})`),
    movieData
  )
}
