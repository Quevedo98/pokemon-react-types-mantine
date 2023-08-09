import { Card, Group, Text, createStyles, rem } from "@mantine/core"
import { SinglePokemon } from "../interfaces/types"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"
interface Props {
  pokemonFromList?: SinglePokemon
}

export const PokemonCard = ({ pokemonFromList }: Props) => {
  const { classes } = useStyles()
  // modalStore
  const { setIsActive, setSelectedPokemon } = usePokemonModalStore(
    (state) => ({
      setIsActive: state.setIsActive,
      setSelectedPokemon: state.setSelectedPokemon,
    }),
    shallow
  )

  return (
    <>
      <Card
        // onClick={() => {
        //   setIsActive(true)
        //   setSelectedPokemon(pokemonReceived as Pokemon)
        // }}
        className={classes.card}
        shadow="md"
        radius="md"
      >
        <Card.Section className={classes.footer}>
          <Group mt="xl">
            <Text fz="lg" fw={700} className={classes.title}>
              {pokemonFromList?.name}
            </Text>
          </Group>
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
