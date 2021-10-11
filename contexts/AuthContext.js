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
            //colocar um switch case, caso o erro for este
            //verificar se o campo email e senha estao vazios
            //verificar formato dos campos
            //mostrar um box que o usuario ou senha estao incorretos
            console.log("algo de errado aconteceu", err)
        }
        
    }

    return(
        <AuthContext.Provider value={{ signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}