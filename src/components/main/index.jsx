import { useEffect, useState } from "react";

async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
    const pokemons = await response.json()
    return pokemons.results
}

console.log(await getPokemons());

export const Main = () => {

    const [ pokemon, setPokemon ] = useState({
        pokemonList: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokeId = await getPokemons()

            setPokemon({
                pokemonList: pokeId
            })
        }
        fetchData()
    },[])

    console.log(pokemon);

    return(
        <main>
            <ul>
                {
                    pokemon.pokemonList.map((item, index) => {
                        return(
                            <li key={index}>
                                <div>
                                    <img src={item.url} />

                                    <h2>{item.name}</h2>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}