import { FC, useEffect, useState } from 'react';
import { getEpisodes } from '../../service/service';
import { Episode } from '../../types/characters.type';

import './tarjeta-episodio.css';

interface IEpisodeProps {
    episode: string;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio:FC<IEpisodeProps> = ({ episode }) => {
    const [episodeData, setEpisodeData] = useState<Episode>();

    /**obtener el id al final del string de todos los episodios */
    const episodeId: string | undefined = episode.split('/').pop();
    
    /**cuando el componente se monta se hace un llamado a la api de episodios de rick y morty pasandole el id del episodio a la funcion*/
    useEffect(() => {
        getEpisodes(episodeId).then((data) => {
            setEpisodeData(data);
        })
    }, []);
    
    return (
        <div className="tarjeta-episodio">
                <h4>{episodeData?.name}</h4>
                <div>
                    <span>{episodeData?.episode}</span>
                    <span>Lanzado el: {episodeData?.air_date}</span>
                </div>
        </div>
    )
}

export default TarjetaEpisodio;