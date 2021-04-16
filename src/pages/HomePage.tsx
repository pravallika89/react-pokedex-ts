import { useEffect, useState } from 'react';
import { pokemonData } from '../data/pokemonData';


  

const HomePage=()=>{
  const [pokemonlist,setPokemonList]=useState(pokemonData);

 
  return(
    <div id="home-page">
    <div className='row text-center mt-3'>
        <div className='col'>
          <h2>Welcome to the Pokedex!</h2>
          <h4 className='text-secondary'>The Ultimate pokemon database</h4>
        </div>
      </div>
      <div id='pokemon-list'>
      <div className='row'>
        <div className='col'>
          <ul className='list-group '>
            {pokemonlist.map((pokemon,index)=>{
            return(
              <li className='list-group-item' key={index}>
                <div className='row'>
                  <div className='col'>
                    <img src={pokemon.img} alt='img' height='100px' width='100px'></img>
                  </div>
                  <div className='col'>
                    <h4 >{pokemon.name}</h4>
                      <small >Height:{pokemon.height} | Weight:{pokemon.weight}</small>
                  </div>
                  <div className='col'>
                    <a  href="javascript:void(0)">More Details</a>
                  </div>
                </div>
                
              </li> 
              )
            })}
          </ul>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default HomePage;