import { Card, Image, Group, Text, createStyles, rem } from "@mantine/core"
import { SinglePokemon } from "../interfaces/types"
import { Pokemon } from "../interfaces/pokemon-full"
import { useEffect, useState } from "react"
import { getAPokemon } from "../services/Pokemon"

interface Props {
  pokemonFromList?: SinglePokemon
  pokemonFromSearch?: Pokemon
}

export const PokemonCard = ({ pokemonFromList, pokemonFromSearch }: Props) => {
  const { classes } = useStyles()

  const [pokemonReceived, setPokemonReceived] = useState<Pokemon>()
  useEffect(() => {
    if (pokemonFromList) {
      getAPokemon(pokemonFromList.url)
        .then((res) => {
          setPokemonReceived(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (pokemonFromSearch) {
      setPokemonReceived(pokemonFromSearch)
    }
  }, [pokemonFromList, pokemonFromSearch])

  return (
    <>
      <Card>
        <Card.Section>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonReceived?.id}.svg`}
            alt={pokemonReceived?.name}
            className={classes.imageSection}
          />
        </Card.Section>
        <Group position="apart" mt="xl">
          <Text fz="lg" fw={700} className={classes.title}>
            {pokemonReceived?.name}
          </Text>
        </Group>
        <Card.Section className={classes.footer}>
          <Text>
            <Text span fw={700} inherit>
              Types:{" "}
            </Text>
            {pokemonReceived?.types.map((item, index, array) => {
              if (index === array.length - 1) {
                return item.type.name
              }
              return item.type.name + ", "
            })}
          </Text>
        </Card.Section>
      </Card>
    </>
  )
}

//Styles
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    textTransform: "capitalize",
  },
  imageSection: {
    margin: "auto",
    padding: theme.spacing.md,
    display: "flex",
    maxWidth: 200,
    maxHeight: 200,
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",

    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))
