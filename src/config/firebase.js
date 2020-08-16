import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4QRjIkK01P_gkDBhMWtGl_1Xx2KSyaW4",
  authDomain: "flipr-hackathon-5.firebaseapp.com",
  databaseURL: "https://flipr-hackathon-5.firebaseio.com",
  projectId: "flipr-hackathon-5",
  storageBucket: "flipr-hackathon-5.appspot.com",
  messagingSenderId: "103049951998",
  appId: "1:103049951998:web:1dca387e87b2a69c0f03af",
  measurementId: "G-3CPNQ4LLFQ",
};

// app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
