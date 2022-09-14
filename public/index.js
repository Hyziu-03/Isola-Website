import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6bxlow1yHkHpMSvpbmXiu76EXFNzD8Kw",
    authDomain: "isolajs.firebaseapp.com",
    projectId: "isolajs",
    storageBucket: "isolajs.appspot.com",
    messagingSenderId: "585967781854",
    appId: "1:585967781854:web:68baa73c58964ae2a43f4f",
    measurementId: "G-88X0G1ZVDW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
