import { FaUser } from "react-icons/fa";
import Pizza from "../assets/Pizza.png";
import { GiPadlock } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useState } from "react";
import { authActions } from "../store/auth"
import axios from "axios";
import { useLocation } from "react-router-dom"


const SignIn = () => {
  const [data, setData] =  useState({username : "", password : ""})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

    const change = (e)=>{
        const {name, value} = e.target
        setData({...data, [name] : value})
    }

    const submit = async()=> {
        try {
            if(data.username === "" || data.password === ""){
                alert('Tous les cases sont requis')
            }else{
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/signin`, data)
                localStorage.setItem("id", response.data.id)
                localStorage.setItem("token", response.data.token)
                setData({username:"", password:""})
                dispatch(authActions.login())
                const redirectTo = location.state?.from || "/form"
                navigate(redirectTo)  
            }
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Une erreur est survenue. Veuillez réessayer')
            }
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-400 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase">Connexion</h1>
            <p className="text-gray-500 text-sm">Se connecter à votre compte.</p>
          </header>

          <form className="space-y-6">
            <div className="border-b border-gray-200 flex items-center gap-3">
                <FaUser className="text-gray-500" />
              <input
              value={data.username}
              onChange={change}
                type="text"
                name="username"
                placeholder="Username" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200 flex items-center gap-3">
                <GiPadlock className="text-gray-500" />
              <input
              value={data.password}
              onChange={change}
                name="password"
                type="password"
                placeholder="Password" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="pt-4">
              <button 
                onClick={submit}
                type="button"
                className="bg-red-500 cursor-pointer text-white px-10 py-2 text-sm transition-colors duration-300"
              >
                Se Connecter
              </button>
            </div>
          </form>

        </div>

        <div className="hidden md:block md:w-1/2 relative">
          <img 
            src={Pizza} 
            alt="Coffee and plants" 
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default SignIn;