import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/*
Steps For Authentication
----------------
Step-1: Initial Setup
1. firebase console: create project 
2. Create Web App
3. Get Configaration
4. Initialize firebase
5. Enable Auth Method
----------------
Step-2: 
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
----------------
Step-3:
1. Set up Sign In Method
2. Set up Sign Out Method
3. User State 
4. Special Observer
----------------
Step-4:
1. Create a AuthContext
2. Create Context Provider
3. Use AuthProvider
4. Create useAuth Hook
*/
