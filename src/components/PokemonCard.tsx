import { Card, Group, Text, createStyles } from "@mantine/core"
// import { SinglePokemon } from "../interfaces/types"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"
interface Props {
  pokemonFromList: string
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonCard = ({ pokemonFromList, setSelectedPokemon }: Props) => {
  const { classes } = useStyles()
  // modalStore
  const { setIsActive } = usePokemonModalStore(
    (state) => ({
      setIsActive: state.setIsActive,
    }),
    shallow
  )

  return (
    <>
      <Card
        onClick={() => {
          setIsActive(true)
          setSelectedPokemon(pokemonFromList)
        }}
        className={classes.card}
        shadow="md"
        radius="md"
      >
        <Card.Section className={classes.footer}>
          <Group>
            <Text fz={{ base: 18, md: 20 }} fw={700} className={classes.title}>
              {pokemonFromList}
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
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  },

  title: {
    textTransform: "capitalize",
  },
}))
