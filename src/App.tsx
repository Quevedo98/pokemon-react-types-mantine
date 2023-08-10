import "./App.css"
import { Container, Title } from "@mantine/core"
import { useState } from "react"
import { SearchForm } from "./components/SearchForm"
import { MainTable } from "./components/MainTable"

function App() {
  const [search, setSearch] = useState<string>("")

  return (
    <>
      <Container mt={30} fluid>
        <header>
          <Title order={1} align="center">
            Pokémon App
          </Title>
          <SearchForm setSearch={setSearch} />
        </header>
        <main>
          <MainTable search={search} />
        </main>
      </Container>
    </>
  )
}

export default App
