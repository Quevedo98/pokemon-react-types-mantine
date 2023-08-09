export interface AllPokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: SinglePokemon[]
}

export interface SinglePokemon {
  name: string
  url: string
}
