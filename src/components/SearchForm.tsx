import { Button, Grid, TextInput } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

interface Props {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const validationSchema = z.object({
  search: z
    .string()
    .nonempty("Please enter the name of a pokémon to do the search."),
})

export const SearchForm = ({ search, setSearch }: Props) => {
  // useForm is a hook from Mantine that helps us manage form state
  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      search: search,
    },
    validate: zodResolver(validationSchema),
  })

  const handleSubmit = (values: any) => {
    setSearch(values)
  }

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Grid maw={{ base: 500 }} mt={{ base: 40 }} mx={"auto"}>
        <Grid.Col>
          <TextInput
            label="Enter a pokémon name"
            placeholder="bulbasaur ..."
            {...getInputProps("search")}
          />
        </Grid.Col>
        <Grid.Col
          display={"flex"}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Button variant="light" type="submit">
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  )
}
