'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement,increment, incrementByValue } from '@/redux/features/conterSile'
import {useGetUserByIdQuery,useGetUsersQuery} from '@/redux/service/userApi'
import {addAll, removeAll,filtro} from '@/redux/features/contSile'
import { useEffect } from "react";
import { AppDispatch } from '../redux/store';

export default function Home() {
  
  const valor = useAppSelector((state) => state.counterReducer.counter)
  const users = useAppSelector((state) => state.contReducer.users)
  
  const dispatch = useAppDispatch()
  
  useEffect(()=>{

    handleAdded()

  },[])


  const handleAdded = async () =>{
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      dispatch(addAll(data))

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-slate-950">

      <div className="flex h-14 items-center justify-center gap-x-20 bg-slate-800 w-full">
      <button className="bg-gray-600 rounded-md px-3 py-2 hover:bg-gray-500"
        onClick={()=> dispatch(decrement())}
        >Decrementar</button>
        <h1 className="">contador: {valor}</h1>
        <button className="bg-gray-600 rounded-md px-3 py-2 hover:bg-gray-500"
        onClick={()=> dispatch(increment())}
        >incrementar</button>
        <button className="bg-gray-600 rounded-md px-3 py-2 hover:bg-gray-500"
        onClick={()=> dispatch(removeAll())}
        >
          Eliminar todos los usuarios
        </button>
        <button className="bg-gray-600 rounded-md px-3 py-2 hover:bg-gray-500"
        onClick={()=> handleAdded()}
        >
          Agregar usuarios
        </button>
        <button className="bg-gray-600 rounded-md px-3 py-2 hover:bg-gray-500"
        onClick={()=> dispatch(filtro("c"))}
        >
          Filtrar Nombres
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-20 bg-slate-800 w-full min-h-screen">
        {
          users?.map((user) => {
            return(
              <div key={user.id} className="bg-stone-300 h-56 w-56 mt-10 text-black">
                <p>Nombre: {user?.name} </p>
                <p>Usuario: {user?.username}</p>
                <p>Email: {user?.email}</p>
              </div>
            )
          })
        }
        
      </div>
    </main>
  );
}
