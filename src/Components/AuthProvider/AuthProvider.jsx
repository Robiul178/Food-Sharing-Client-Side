import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
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
    };
    const googleSignUp = () => {
        return signInWithPopup(auth, provider);
    };

    const loginOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        axios.get('https://server-wine-ten.vercel.app/foods')
            .then(data => {
                setFood(data.data)
                console.log('Authdata', data.data)
            })


    }, [])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser', currentUser)

            const userEmail = currentUser?.email || user?.email;


            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                const logUser = { email: userEmail }
                axios.post("https://server-wine-ten.vercel.app/jwt", logUser, { withCredentials: true })
                    .then(res => {
                        console.log("token response", res.data)
                    })
            } else {
                const logUser = { email: userEmail }
                axios.post("https://server-wine-ten.vercel.app/log-out", logUser, {
                    withCredentials: true
                }).then(res => {
                    console.log("token log out", res.data)
                })
            }


        });
        return () => {
            unSubscribe()
        }
    }, [user?.email])


    const authInfo = {
        user,
        food,
        registerUser,
        loginUser,
        loginOut,
        googleSignUp,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;