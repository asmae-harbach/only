import { FaUser } from "react-icons/fa";
import Pizza from "../assets/Pizza.png";
import { GiPadlock } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [data, setData] = useState({ username: "", password: "" })
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const location = useLocation()


  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/signin', { state: { from: location.pathname } })
    }
  })

    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const submit = async () => {
        try {
            if (!data.username || !data.password) {
                alert("Tous les champs sont requis")
                return
            }

            const res = await axios.post(
                `http://localhost:3000/signin/signup`,
                data
            )

            alert(res.data.message)
            navigate("/signin")

        } catch (error) {
            alert(error.response?.data?.message || "Erreur serveur")
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-400 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase">Inscription</h1>
            <p className="text-gray-500 text-sm">Ajouter un Compte.</p>
          </header>

          <form className="space-y-6">
            <div className="border-b border-gray-200 flex items-center gap-3">
                <FaUser className="text-gray-500" />
              <input
              name="username"
                value={data.username}
                onChange={change}
                type="text"
                placeholder="Username" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200 flex items-center gap-3">
                <GiPadlock className="text-gray-500" />
              <input
              name="password"
              onChange={change}
                value={data.password}
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
                S'Inscrire
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

export default SignUp;