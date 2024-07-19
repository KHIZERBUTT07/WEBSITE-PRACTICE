
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth , onAuthStateChanged

   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCS6IcokYqV2wbIEkWgNcQcauO93qotOzs",
    authDomain: "my-first-website-40f76.firebaseapp.com",
    projectId: "my-first-website-40f76",
    storageBucket: "my-first-website-40f76.appspot.com",
    messagingSenderId: "171137188691",
    appId: "1:171137188691:web:b15a81ddda10b71e4f97a6",
    measurementId: "G-VDMBMVNYCV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app)
//   console.log("app=>",auth)

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is logged in")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
        console.log("user is not logged in")
      // User is signed out
      // ...
    }
  });