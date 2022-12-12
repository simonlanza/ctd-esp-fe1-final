import { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { getCharacterById } from "../service/service";
import { Character } from "../types/characters.type";

import "./Detalle.css";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle: FC = () => {
  const [character, setCharacter] = useState<Character>();
  const { id }: any = useParams();

  /* Un hook que setea el personaje cuando el componente se monta y cuando el id cambia
   */
  useEffect(() => {
    getCharacterById(id).then((data) => {
      setCharacter(data);
    });
  }, [id]);

  return (
    <div className="container">
      <h3>{character?.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={character?.image} alt={character?.name} />
          <div className={"detalle-header-texto"}>
            <p>{character?.name}</p>
            <p>Planeta: {character?.origin?.name}</p>
            <p>Genero: {character?.gender}</p>
          </div>
          <BotonFavorito character={character} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {character?.episode?.map((episode, index) => (
          <TarjetaEpisodio key={index} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default PaginaDetalle;
