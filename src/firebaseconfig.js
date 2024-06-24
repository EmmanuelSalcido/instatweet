// Importar las funciones necesarias de los SDKs de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Configuración de tu aplicación web Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAfYZJtIBM3cy6NJfel4-FvoJmU7iM9NI0",
    authDomain: "instatweet-bd433.firebaseapp.com",
    projectId: "instatweet-bd433",
    storageBucket: "instatweet-bd433.appspot.com",
    messagingSenderId: "382771220101",
    appId: "1:382771220101:web:bfd172be9b4813539b63ec",
    measurementId: "G-TWSVXC85DL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtener el objeto de autenticación
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, auth, analytics, firestore }; // Exportar objetos de Firebase para uso en otros archivos
