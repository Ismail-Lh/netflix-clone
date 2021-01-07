import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
const firebaseConfig = {
	apiKey: "AIzaSyBnaj2rvkFUkCsmxgqosfNivm96hjkcpDI",
	authDomain: "netflix-clone-bbd94.firebaseapp.com",
	projectId: "netflix-clone-bbd94",
	storageBucket: "netflix-clone-bbd94.appspot.com",
	messagingSenderId: "409026855824",
	appId: "1:409026855824:web:2d00c5aaa543bde7062915"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
