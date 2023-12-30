async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
    const pokemons = await response.json()
    return pokemons
}

console.log(await getPokemons());

const Main = () => {
    <main>
        <h1>Teste</h1>
    </main>
}