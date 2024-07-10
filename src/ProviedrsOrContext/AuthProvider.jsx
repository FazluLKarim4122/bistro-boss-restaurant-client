import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuUser] = useState(null)
    const [laoding, setLoading]= useState(true)

    const authInfo = {
        user,
        laoding,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;