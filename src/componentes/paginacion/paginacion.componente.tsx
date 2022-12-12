import { FC } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/actions/characters.actions";
import { useSelector } from "../../redux/store";

import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion: FC = () => {
  const { page } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  /**
   * Funcion, ejecutada al hacer click en los botones de paginacion, en caso de que reciba prev se resta 1 y si recibe next se suma uno a la pagina actual.
   * @param arg: string
   */
  const handlePage = (arg: string) => {
    if (arg === "prev" && page >= 0) {
      dispatch(changePage(page - 1));
    } else if (arg === "next") {
      dispatch(changePage(page + 1));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={page >= 1 ? false : true}
        onClick={() => handlePage("prev")}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        disabled={page <= 42 ? false : true}
        onClick={() => handlePage("next")}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
