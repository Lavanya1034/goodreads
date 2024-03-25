import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedComponet=(props)=>{

    const {Component} = props
    
    const nav = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            nav("/login")
        }

    },[])
    return(
        <><Component/></>
    )
}

export default ProtectedComponet;