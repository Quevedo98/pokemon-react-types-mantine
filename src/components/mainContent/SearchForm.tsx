import { Grid, TextInput } from "@mantine/core"
import { AiOutlineSearch } from "react-icons/ai"

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchForm = ({ setSearch }: Props) => {
  return (
    <form>
      <Grid maw={{ base: 500 }} mt={{ base: 25 }} mx={"auto"}>
        <Grid.Col>
          <TextInput
            label="Search for a Pokémon by name"
            placeholder="bulbasaur ..."
            onChange={(e) => {
              setSearch(e.currentTarget.value.toLowerCase())
            }}
            size="lg"
            radius={12}
            icon={<AiOutlineSearch />}
          />
        </Grid.Col>
      </Grid>
    </form>
  )
}
