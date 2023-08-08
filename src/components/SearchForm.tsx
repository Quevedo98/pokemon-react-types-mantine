import { Button, Grid, TextInput } from "@mantine/core"

interface Props {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchForm = ({ search, setSearch }: Props) => {
  return (
    <Grid maw={{ base: 500 }} mt={{ base: 40 }} mx={"auto"}>
      <Grid.Col sm={10}>
        <TextInput label="Enter a pokémon name" placeholder="bulbasaur ..." />
      </Grid.Col>
      <Grid.Col
        sm={2}
        display={"flex"}
        style={{ alignItems: "flex-end", justifyContent: "center" }}
      >
        <Button variant="light">Search</Button>
      </Grid.Col>
    </Grid>
  )
}
