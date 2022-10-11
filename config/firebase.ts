import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7Zy6jYe_WfSFI2qhlRn3T-yrO0n-wDTs',
  authDomain: 'nextjsproject-4c7e6.firebaseapp.com',
  projectId: 'nextjsproject-4c7e6',
  storageBucket: 'nextjsproject-4c7e6.appspot.com',
  messagingSenderId: '485642129180',
  appId: '1:485642129180:web:650a7115e78174168674d9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
