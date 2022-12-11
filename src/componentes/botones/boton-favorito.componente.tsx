
import { FC } from 'react';
import { useDispatch} from 'react-redux';
import { toggleFavorites } from '../../redux/actions/characters.actions';
import { useSelector } from '../../redux/store';
import { Character } from '../../types/characters.type';

import './boton-favorito.css';

interface IFavoriteProps {
    character?: Character | undefined;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito:FC<IFavoriteProps> = ({ character }) => {
    const { favorites } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    /**
     * Cuando el usuario hace click en el boton de favorito, despacha la accion toggleFavorites con el personaje
     */
    const handleFavorite = () => {
        dispatch(toggleFavorites(character));
    }

    /* Checkea si el personaje esta en la lista de favoritos, si esta devuelve true, de lo cobtrario false */
    const checkIsFavorite = favorites.find(favorite => favorite.id === character?.id)?.id === character?.id;
    
    const src = checkIsFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    
    return (
        <div className="boton-favorito" onClick={handleFavorite}>
            <img src={src} alt={"favorito"} />
        </div>
    )
}
export default BotonFavorito;