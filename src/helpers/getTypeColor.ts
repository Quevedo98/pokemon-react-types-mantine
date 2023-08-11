import { typeColors } from "../data/typeColors"
import { PokemonTypes } from "../interfaces/types.d"

export const getTypeColor = (type: string): string => {
  if (type === PokemonTypes.NORMAL) {
    return typeColors.normal
  }
  if (type === PokemonTypes.FIRE) {
    return typeColors.fire
  }
  if (type === PokemonTypes.WATER) {
    return typeColors.water
  }
  if (type === PokemonTypes.ELECTRIC) {
    return typeColors.electric
  }
  if (type === PokemonTypes.GRASS) {
    return typeColors.grass
  }
  if (type === PokemonTypes.ICE) {
    return typeColors.ice
  }
  if (type === PokemonTypes.FIGHTING) {
    return typeColors.fighting
  }
  if (type === PokemonTypes.POISON) {
    return typeColors.poison
  }
  if (type === PokemonTypes.GROUND) {
    return typeColors.ground
  }
  if (type === PokemonTypes.FLYING) {
    return typeColors.flying
  }
  if (type === PokemonTypes.PSYCHIC) {
    return typeColors.psychic
  }
  if (type === PokemonTypes.BUG) {
    return typeColors.bug
  }
  if (type === PokemonTypes.ROCK) {
    return typeColors.rock
  }
  if (type === PokemonTypes.GHOST) {
    return typeColors.ghost
  }
  if (type === PokemonTypes.DRAGON) {
    return typeColors.dragon
  }
  if (type === PokemonTypes.DARK) {
    return typeColors.dark
  }
  if (type === PokemonTypes.STEEL) {
    return typeColors.steel
  }
  if (type === PokemonTypes.FAIRY) {
    return typeColors.fairy
  }
  return typeColors.other
}
