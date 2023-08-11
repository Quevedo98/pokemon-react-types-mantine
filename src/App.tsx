import "./index.css"
import "./App.css"
import { Box, Container, Image, Title } from "@mantine/core"
import { useState } from "react"
import { SearchForm } from "./components/mainContent/SearchForm"
import { MainContent } from "./components/MainContent"

function App() {
  const [search, setSearch] = useState<string>("")

  return (
    <>
      <Container mt={30} maw={1400}>
        <header>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Title order={1} align="center">
              Pokémon App
            </Title>
            <Image src={"/pokeball.svg"} width={40} />
          </Box>
          <SearchForm setSearch={setSearch} />
        </header>
        <main>
          <MainContent search={search} />
        </main>
      </Container>
    </>
  )
}

export default App
