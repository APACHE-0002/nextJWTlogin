import { createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const isAuthenticated = false;

    async function signIn({email, password}){
        try{
            const response = await api.post('sessions', {
                email,
                password,
            })
            
            console.log(response);
        } catch (err){
            console.log(err)
        }
        
    }

    return(
        <AuthContext.Provider value={{ signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}