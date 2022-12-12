import { FC, useEffect, useState } from "react";
import { getEpisodes } from "../../service/service";
import { Episode } from "../../types/characters.type";

import "./tarjeta-episodio.css";

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
const TarjetaEpisodio: FC<IEpisodeProps> = ({ episode }) => {
  const [episodeData, setEpisodeData] = useState<Episode>();

  /**
   * se obtiene el id, ubicado al final del string de todos los episodios
   */
  const episodeId: string | undefined = episode.split("/").pop();

  /**
   * se llama a la api, el el montaje del componente, pasando el id del episodio
   */
  useEffect(() => {
    getEpisodes(episodeId).then((data) => {
      setEpisodeData(data);
    });
  }, []);

  return (
    <div className="tarjeta-episodio">
      <h4>{episodeData?.name}</h4>
      <div>
        <span>{episodeData?.episode}</span>
        <span>Lanzado el: {episodeData?.air_date}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
