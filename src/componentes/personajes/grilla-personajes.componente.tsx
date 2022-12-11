import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../redux/actions/characters.actions';
import { useSelector } from '../../redux/store';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import './grilla-personajes.css';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes:FC = () => {

    const { search, status, characters, page, favorites } = useSelector(state => state.characters);
    const dispatch = useDispatch();
    
    /**si la busqueda o la pagina cambian se hace un llamado a la API*/
    useEffect(() => {
        if (!search){
          dispatch(fetchCharactersThunk(page))
        }
      }, [search, page])
      

    return (
        <div className="grilla-personajes">
            <TarjetaPersonaje characters={characters} status={status} favorites={favorites} />
        </div>
    )
}
 
export default GrillaPersonajes;