import { useEffect, useRef, useState } from "react";
import Pizza from "../assets/Pizza.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Form = () => {
  const [data, setData] = useState({name : "", price : "", rating:"", category : "", image : "",  desc : ""})
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const Navigate = useNavigate()
  const fileInputRef = useRef(null)
  const location = useLocation()


    useEffect(()=>{
        if(!isLoggedIn){
            Navigate('/signin', { state: { from: location.pathname } })
        }
    }, [isLoggedIn])
    const change = (e)=>{
        const {name, value, files} = e.target
        if(name === "image"){
            setData({...data, image : files[0]})
        }else{
            setData({...data, [name] : value})
        }
    }

    const addProduct = async () => {
        const {name, price, rating, category, image, desc} = data
        if(!name || !desc || !category || !image || !price || !rating){
          alert('Tous les champs sont requis')
          return;
        }
        if (Number(rating) > 5) {
          alert("Le rating ne peut pas dépasser 5");
          return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", Number(price));
        formData.append("rating", Number(rating));
        formData.append("category", category);
        formData.append("image", image);
        formData.append("desc", desc);



        try{
            await axios.post("http://localhost:3000/products/add-product", formData)
            alert("Produit Ajoutée !")
            setData({name : "", price : "", rating:"", category : "",  image : "",  desc : ""})
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }catch(err){
            console.error(err)
            alert("Erreur lors de l'ajout du produit")
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-400 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase">Ajouter Produit</h1>
            <p className="text-gray-500 text-sm">Ajouter un produit à votre menu.</p>
          </header>

          <form className="space-y-6">
            <div className="border-b border-gray-200">
              <input 
                name="name"
                value={data.name} onChange={change}
                type="text"
                placeholder="Nom Produit" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200">
              <textarea
                name="desc"
                value={data.desc} onChange={change}
                rows={4}
                type="text"
                placeholder="Description" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200">
              <input 
                name="price"
                value={data.price} onChange={change}
                type="number" 
                placeholder="Price"
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200">
              <input 
                min="0"
                max="5"
                name="rating"
                value={data.rating} onChange={change}
                type="number" 
                placeholder="Rating" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              />
            </div>
            <div className="border-b border-gray-200">
              <select 
                value={data.category} onChange={change}
                name = "category"
                type="text" 
                placeholder="Category" 
                className="w-full py-2 outline-none text-sm placeholder-gray-300 focus:border-green-800 transition-colors"
              >
                <option value="">Category</option>
                <option value="Tacos">Tacos</option>
                <option value="Signatures">Signatures</option>
                <option value="Burger">Burger</option>
                <option value="Pizza">Pizza</option>
              </select>
            </div>
            <div>
                <input name="image" ref={fileInputRef} onChange={change} className="my-2 file:mx-3 file:py-2 file:px-4 file:w-[50%] file:rounded-3xl file:border-2 file:text-sm file:font-semibold file:border-color2 file:bg-transparent  file:text-red-500 hover:file:text-white hover:file:bg-red-500/80" type="file" accept="image/*" />

            </div>
            

            <div className="pt-4">
              <button 
                type="button"
                onClick={addProduct}
                className="bg-red-500 cursor-pointer text-white px-10 py-2 text-sm transition-colors duration-300"
              >
                Ajouter
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

export default Form;