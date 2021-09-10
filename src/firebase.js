import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import "firebase/compat/firestore"
// import * as firebase from "firebase/netflix-clone";


const firebaseConfig = {
    apiKey: "AIzaSyCVpn1XNajSBJLzQTYZJGthSwFNX_kdWmw",
    authDomain: "netflix-clone-28a90.firebaseapp.com",
    projectId: "netflix-clone-28a90",
    storageBucket: "netflix-clone-28a90.appspot.com",
    messagingSenderId: "1028458379066",
    appId: "1:1028458379066:web:efb1f6f930040fbcf5c203"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db