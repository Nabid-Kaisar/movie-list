import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { firebaseConfig } from '@/credentials/Firebase.ts'
import type { MovieData } from '../model/MovieData.ts'

export const app = ref()
export const db = ref()

export const isFirebaseInitiated = () => app.value && db.value

const path = 'movies-list'

export const initiateFirebase = async () => {
  if (isFirebaseInitiated()) {
    return true
  }
  // Initialize Firebase
  app.value = initializeApp(firebaseConfig)
  db.value = getFirestore(app.value)
}

export const getMovieList = async () => {
  await initiateFirebase()
  const querySnapshot = await getDocs(collection(db.value, path))
  const moviesList = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const docData = doc.data()
    docData.seqId = doc.id
    moviesList.push(docData)
  })

  return moviesList
}
export const addMovie = async (movieData) => {
  await initiateFirebase()
  await addDoc(collection(db.value, path), movieData)
}

export const getMovieDetail = async (seqId) => {
  await initiateFirebase()
  console.log('path :: ', path)
  console.log('seqId :: ', seqId)
  const docRef = doc(db.value, path, seqId)
  console.log('docRef :: ', docRef)
  const docSnap = await getDoc(docRef)
  console.log('docSnap :: ', docSnap)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
    return null
  }
}

export const movieEdit = async (seqId, editedData: MovieData) => {
  await initiateFirebase()

  const result = await setDoc(doc(db.value, path, seqId), editedData as any)
  console.log('result of editing:: ', result)
}
