import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [services,setServices]=useState([]);
    const [loading ,setLoading]=useState(true);
    
    let authorizationToken=`Bearer ${token}`;
    const storeTokenInLS=(serverToken)=>{
        
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);

    }
    let isLoggedIn=!!token;
    const LogoutUser=()=>{
        setUser("");
        setToken("");
        return localStorage.removeItem("token");

    }
    //JWT Authetication- to get currently user data
    const userAuthetication=async()=>{
        try{
            setLoading(true); 
            const response=await fetch('http://localhost:5000/api/data/user',{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }

            });
            if(response.ok){
                const data=await response.json();             
               setUser(data.userData);
               setLoading(false);
              
            }
            else{
                setLoading(false);
            }
            
        }
        catch(error){
            console.log("Error in fetching user data");
        }
    }
    const getAllServices=async()=>{
        try{
            const response=await fetch('http://localhost:5000/api/data/services',{
                method:"GET",

            });
            if(response.ok){
                const data=await response.json();
                
                setServices(data.data);
            }
        }
        catch(error){
            console.log("Error in fetching service data");
        }
    }
    useEffect(()=>{
        userAuthetication();
        getAllServices();
    },[]);
    return (
    <AuthContext.Provider value={{storeTokenInLS,LogoutUser,isLoggedIn,user,services,authorizationToken,setLoading,setLoading}}>
        {children}
    </AuthContext.Provider>
    );

}

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}