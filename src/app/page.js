'use client'

import { useEffect, useState } from 'react';

import axios from 'axios';
import Image from 'next/image';

function App() {
  
  const[pokemons, setPokemons] = useState([]);

  useEffect(()=>{

    getPokedex();
  },[])

  const getPokedex = () =>{
    var endpoints=[];
    for (var i=1; i<21;i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      
    }

    
    axios.all(endpoints.map((endpoint)=> axios.get(endpoint)))
    .then((res)=>setPokemons(res));
   
  }

  const pokemonFilter= (name)=>{

    var filterPokemon =[]
    if (name === "") {
      getPokedex();
      
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filterPokemon.push(pokemons[i])
        
      }
      
    }
    
    setPokemons(filterPokemon);
  }


  return (
  <div className=' bg-zinc-900 h-screen'>
    <header className='bg-zinc-900 flex justify-between  py-8 px-10 '>
      <div className='flex gap-3'>
        <p className=' text-2xl text-white'> 
          <strong>POKEMON</strong>
        </p>
        
      </div>
      <div className='flex'>
        <input onChange={(e)=>pokemonFilter(e.target.value)} 
          className='bg-zinc-600 rounded-full items-center py-3 px-1 ' 
          placeholder='searching'
          type="search"

        />
      </div>
    </header>

    <main className='bg-zinc-800 justify-between'>

      <div className=' mx-10 grid grid-cols-5 gap-3 columns-5   items-center'>
      
        {pokemons.map((pokemon,key) =>(
          <div  key={key} className="bg-zinc-700 items-center text-white mt-5 
           py-6 px-10  mb-6 rounded-md">
           
           <Image src={pokemon.data.sprites.front_default} 
              width={130}
              height={130}
              alt="pokemon"

            />
              
            <p className='items-center text-xl'>{pokemon.data.name}</p> 
            <p>Experience:{pokemon.data.base_experience}</p>
          
          </div>
        ))}
          
      </div>

    </main>
    <footer className='bg-zinc-900 h-10 py-10 px-5 '>
      <div>
        <p className='text-white'>Todos os Direitos Reservados</p>
      </div>

    </footer>

  </div>    
    
)
}
export default App;