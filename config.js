// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyC1F24zaglp-h_TgkNoPqkgMgK9ToVCWZQ',
    authDomain: 'goithw-a1b65.firebaseapp.com',
    databaseURL: '<https://goithw-a1b65.firebaseio.com>',
    projectId: 'goithw-a1b65',
    storageBucket: 'goithw-a1b65.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
