import { Character, Episode } from "../types/characters.type";

/**
 * Toma un string como argumento, hace un fetch a Rick y Morty API, y retorna un array de personajes
 * @param {string} search - string - La busqueda del input para buscar un personaje
 * @returns Un array de personajes.
 */
export const searchCharactersAPI = async (search: string): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
    const data = await response.json();
    return data.results;
}

/**
 * Toma la pagina comoa argumento, hace un fetch a la API, y retorna un array de personajes
 * @param {number} page - number - el numero de pagina.
 * @returns array de personajes
 */
export const getAllCharacters = async (page: number): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    return data.results;
}

/**
 * Toma un number como argumento que es el id del personaje, hace un fetch, y retorna un objeto personaje
 * @param {number} characterId - number
 * @returns la informacion de un personaje.
 */
export const getCharacterById = async (characterId: number): Promise<Character> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    const data = await response.json();
    return data;
}

/**
 * Toma un id como parametro, hace un fetch a la data de la API, y devuleve la data
 * @param {string | undefined} id - string | undefined
 * @returns devuelve un objeto con las siguientes propiedades:
 * id: number
 * name: string
 * air_date: string
 * episode: string
 * characters: string[]
 * url: string
 * created: string
 */
export const getEpisodes = async (id: string | undefined): Promise<Episode> => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const data = await response.json();
    return data;
}