import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAz4fw098wGRqlB_N5swvm8uObpeneMpkg",
    authDomain: "isola-website.firebaseapp.com",
    projectId: "isola-website",
    storageBucket: "isola-website.appspot.com",
    messagingSenderId: "742724889721",
    appId: "1:742724889721:web:3dc85ffacdfc42b96bb8a8",
    measurementId: "G-1HNZLXWLRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
