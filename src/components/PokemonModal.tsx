import { Container, Flex, Image, Modal, Stack, Text } from "@mantine/core"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"
import notFoundImg from "../assets/NotFoundImg.png"

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
            src={selectedPokemon?.sprites.front_default ?? notFoundImg}
            alt={selectedPokemon?.name}
            width={200}
            height={"auto"}
          />
        </Flex>
        <Stack spacing={6} mt={40}>
          <Text>
            <Text span fw={700} c={"light"}>
              {" "}
              Id:{" "}
            </Text>
            {selectedPokemon.id}
          </Text>
          <Text>
            <Text span fw={700} c={"light"}>
              {" "}
              Name:{" "}
            </Text>
            {selectedPokemon.name}
          </Text>
          <Text>
            <Text span fw={700} c={"light"}>
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
            <Text span fw={700} c={"light"}>
              {" "}
              Height:{" "}
            </Text>
            {selectedPokemon.height}
          </Text>
          <Text>
            <Text span fw={700} c={"light"}>
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
