import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PokemonPage from '../pages/PokemonPage';
import Navbar from '../components/Navbar'




const AppRouter=()=>{
  return(
    <div >
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/pokemon/:pokemonId' component={PokemonPage}/>
        </Switch>
      </div>
    </div>
  )
}

export default AppRouter;