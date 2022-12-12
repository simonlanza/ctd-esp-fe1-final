import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Character } from "../../types/characters.type";

import BotonFavorito from "../botones/boton-favorito.componente";
import Loading from "../loading/loading";

import "./tarjeta-personaje.css";

interface ITarjetaProps {
  characters: Character[];
  status: string;
  favorites: Character[];
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje: FC<ITarjetaProps> = ({
  characters,
  status,
  favorites,
}) => {
  const location = useLocation().pathname;

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <span>Hubo un error</span>
      ) : null}
      {location === "/"
        ? characters?.map((character) => (
            <div key={character.id} className="tarjeta-personaje">
              <Link to={`/detalle/${character.id}`}>
                <img src={character.image} alt="Rick Sanchez" />
              </Link>
              <div className="tarjeta-personaje-body">
                <span>{character.name}</span>
                <BotonFavorito character={character} />
              </div>
            </div>
          ))
        : favorites.map((character) => (
            <div key={character.id}>
              <Link to={`/detalle/${character.id}`}>
                <img src={character.image} alt="Rick Sanchez" />
              </Link>
              <div className="tarjeta-personaje-body">
                <span>{character.name}</span>
                <BotonFavorito character={character} />
              </div>
            </div>
          ))}
    </>
  );
};

export default TarjetaPersonaje;
