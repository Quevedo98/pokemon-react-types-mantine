import { Grid, TextInput } from "@mantine/core"

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchForm = ({ setSearch }: Props) => {
  return (
    <form>
      <Grid maw={{ base: 500 }} mt={{ base: 40 }} mx={"auto"}>
        <Grid.Col>
          <TextInput
            label="Enter a pokémon name"
            placeholder="bulbasaur ..."
            onChange={(e) => {
              setSearch(e.currentTarget.value)
            }}
          />
        </Grid.Col>
        <Grid.Col
          display={"flex"}
          style={{ alignItems: "center", justifyContent: "center" }}
        ></Grid.Col>
      </Grid>
    </form>
  )
}
