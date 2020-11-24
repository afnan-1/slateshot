import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDA8iRHDwzeFcNCy4gFZ1HfWuSbd1LC5DE",
  authDomain: "slateshot-67d9d.firebaseapp.com",
  databaseURL: "https://slateshot-67d9d.firebaseio.com",
  projectId: "slateshot-67d9d",
  storageBucket: "slateshot-67d9d.appspot.com",
  messagingSenderId: "662803095782",
  appId: "1:662803095782:web:982e880e820dba0a1e5b27",
  measurementId: "G-X5GGPT8Q4V"
};
firebase.initializeApp(firebaseConfig);
export default firebase