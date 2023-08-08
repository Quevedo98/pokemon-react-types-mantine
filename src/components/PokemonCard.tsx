import { Card, Image, Group, Text, createStyles, rem } from "@mantine/core"
import { SinglePokemon } from "../interfaces/types"
import { Pokemon } from "../interfaces/pokemon-full"
import { useEffect, useState } from "react"
import { getAPokemon } from "../services/Pokemon"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"
import notFoundImg from "../assets/NotFoundImg.png"

interface Props {
  pokemonFromList?: SinglePokemon
  pokemonFromSearch?: Pokemon
}

export const PokemonCard = ({ pokemonFromList, pokemonFromSearch }: Props) => {
  const { classes } = useStyles()

  const [pokemonReceived, setPokemonReceived] = useState<Pokemon>()

  // modalStore
  const { setIsActive, setSelectedPokemon } = usePokemonModalStore(
    (state) => ({
      setIsActive: state.setIsActive,
      setSelectedPokemon: state.setSelectedPokemon,
    }),
    shallow
  )

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
      <Card
        onClick={() => {
          setIsActive(true)
          setSelectedPokemon(pokemonReceived as Pokemon)
        }}
        className={classes.card}
        shadow="md"
        radius="md"
      >
        <Card.Section>
          <Image
            src={pokemonReceived?.sprites.front_default ?? notFoundImg}
            alt={pokemonReceived?.name}
            className={classes.imageSection}
          />
        </Card.Section>

        <Card.Section className={classes.footer}>
          <Group mt="xl">
            <Text fz="lg" fw={700} className={classes.title}>
              {pokemonReceived?.name}
            </Text>
          </Group>
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
    minHeight: " 100%",
    cursor: "pointer",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
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
    maxWidth: 140,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
}))
