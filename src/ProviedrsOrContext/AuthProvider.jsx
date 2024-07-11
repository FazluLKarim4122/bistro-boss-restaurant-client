import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setuUser] = useState(null)
    const [laoding, setLoading]= useState(true)
    
    const creatUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    
    //user এর auth change হইলে আমরা onAuthStateChanged use করি। outside এর api কে hit করবে এ জন্য useEffect এর মধ্যে রাখবো এবং সে এটা একবারই করবে, এবং সে একটা জিনিস কে subscribe করে রাখে।
    // unsubscribe return করতে হবে, কারণ এই onAuthStateChanged সে watch করতে থাকবে কোন একটা কিছু change হইছে কিনা তারপর change হয়ে গেলে থাকবে, যদি ঐ application টা off করে দেই তহলে সেই জায়গাটায় আর watch করা থাকবে না।
       useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuUser(currentUser)
            console.log('Current User: ',currentUser);
            setLoading(false)// loading টা হয়ে গেছে user information পেয়ে গেছি

        })
        return ()=>{
            return unsubscribe()
        }
       },[])

    const authInfo = {
        user,
        laoding,
        creatUser,
        login,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;