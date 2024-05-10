// import React from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
// import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const [food, setFood] = useState();


    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        axios.get('http://localhost:1000/foods')
            .then(data => {
                console.log("from data", data.data)
                setFood(data.data)
            })

    }, [])

    // const { data } = useQueries({
    //     queryKey: ['foods'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:1000/foods')
    //         return res.json()
    //     }

    // })


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        food,
        registerUser,
        loginUser,
        logOut,
        googleSignUp,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;