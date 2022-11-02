import { FirebaseApp, initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFunctions } from '@firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0zZzBan7E3YmvAon4l4h7ZOA9hamvlHE",
  authDomain: "kaupunkifillarit-aed04.firebaseapp.com",
  projectId: "kaupunkifillarit-aed04",
  storageBucket: "kaupunkifillarit-aed04.appspot.com",
  messagingSenderId: "746873844238",
  appId: "1:746873844238:web:33ffbe49354f2cb420825f",
  measurementId: "G-S8P5Z3F6S5"
};

let firebaseInstance: FirebaseApp;

const InitializeAppCheck = () => {
  if (!firebaseInstance) firebaseInstance = initializeApp(firebaseConfig);

  return initializeAppCheck(firebaseInstance, {
    provider: new ReCaptchaV3Provider('6LdyvQYdAAAAAKZD7R1vWhl5PrCyfhHS4zaa6dii'),
    isTokenAutoRefreshEnabled: true,
  });
};

const GetFunctionsInstance = () => {
  const appCheckInstance = InitializeAppCheck();
  return getFunctions(appCheckInstance.app);
};

const FirebaseServices = {
  getFunctionsInstance: GetFunctionsInstance,
}

export default FirebaseServices;
