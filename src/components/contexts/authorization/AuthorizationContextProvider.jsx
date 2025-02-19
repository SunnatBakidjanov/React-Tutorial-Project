import { useState } from "react";
import { AuthContext } from "./index";

export const AuthorizationContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthed: true });

    const toggleAuth = () => {
        setAuth(prev => (prev.isAuthed ? { isAuthed: false } : { isAuthed: true, name: "User" }));
    };

    return <AuthContext.Provider value={{ auth, toggleAuth }}>{children}</AuthContext.Provider>;
};
