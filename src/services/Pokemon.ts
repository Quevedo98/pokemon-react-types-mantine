export const getAllPokemon = async (page: number) => {
  try {
    const request = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 12}`
    )
    const response = await request.json()
    return response
  } catch (error) {
    throw new Error("Error getting all pokemon")
  }
}

export const getAPokemonByName = async (name: any) => {
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const response = await request.json()

    return response
  } catch (error) {
    throw new Error("Error getting a pokemon")
  }
}
