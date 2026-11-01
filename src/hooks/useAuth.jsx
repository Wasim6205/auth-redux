import { useNavigate } from "react-router"
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registeredUsers,setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])

    const {register,handleSubmit,reset,formState:{errors}} = useForm()

    const registerForm = (data) => {
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        localStorage.setItem("registeredUsers",JSON.stringify(arr))
        toast.success("user registered")
        navigate("/")
    }

    const loginForm = (data) => {
        let user = registeredUsers.find((val) => {
            return val.email === data.email && val.password === data.password
        })

        if(!user){
            toast.error("invalid credentials")
            return
        }

        dispatch(addUser(user))
        localStorage.setItem("loggedInUser",JSON.stringify(user))
        toast.success("user loggedin")
        reset()
    }

    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerForm,
        loginForm
    }
}