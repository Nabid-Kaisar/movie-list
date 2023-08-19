import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { firebaseConfig } from '@/credentials/Firebase.ts'
import { collection, getDocs } from 'firebase/firestore'

export const app = ref()
export const db = ref()

export const isFirebaseInitiated = () => app.value && db.value

export const initiateFirebase = async () => {
  if (isFirebaseInitiated()) {
    return true
  }
  // Initialize Firebase
  app.value = initializeApp(firebaseConfig)
  db.value = getFirestore(app.value)
}

export const getMovieList = async () => {
  const querySnapshot = await getDocs(collection(db.value, 'movies-list'))
  const moviesList = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    doc.data().seqId = doc.id
    moviesList.push(doc.data())
  })

  return moviesList
}
export const addMovie = async (movieData) => {
  await setDoc(
    doc(db.value, 'movies-list', `${movieData.movieName} (${movieData.releasedYear})`),
    movieData
  )
}
