import { Container, Flex, Image, Modal, Stack, Text } from "@mantine/core"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"

export const PokemonModal = () => {
  const { setIsActive, isActive, selectedPokemon } = usePokemonModalStore(
    (state) => ({
      setIsActive: state.setIsActive,
      isActive: state.isActive,
      selectedPokemon: state.selectedPokemon,
    }),
    shallow
  )

  return (
    <Modal
      opened={isActive}
      onClose={() => setIsActive(false)}
      title="Pokemon Detail"
      styles={{
        title: {
          fontWeight: 700,
        },
      }}
    >
      <Container>
        <Flex justify={"center"}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon?.id}.svg`}
            alt={selectedPokemon?.name}
            width={200}
          />
        </Flex>
        <Stack spacing={6} mt={40}>
          <Text>
            <Text span fw={700} c={"dark"}>
              {" "}
              Id:{" "}
            </Text>
            {selectedPokemon.id}
          </Text>
          <Text>
            <Text span fw={700} c={"dark"}>
              {" "}
              Name:{" "}
            </Text>
            {selectedPokemon.name}
          </Text>
          <Text>
            <Text span fw={700} c={"dark"}>
              {" "}
              Abilities:{" "}
            </Text>
            {selectedPokemon.abilities?.map((ability, index, array) => {
              if (index === array.length - 1) {
                return ability.ability.name
              }
              return `${ability.ability.name}, `
            })}
          </Text>
          <Text>
            <Text span fw={700} c={"dark"}>
              {" "}
              Height:{" "}
            </Text>
            {selectedPokemon.height}
          </Text>
          <Text>
            <Text span fw={700} c={"dark"}>
              {" "}
              Order:{" "}
            </Text>
            {selectedPokemon.order}
          </Text>
        </Stack>
      </Container>
    </Modal>
  )
}