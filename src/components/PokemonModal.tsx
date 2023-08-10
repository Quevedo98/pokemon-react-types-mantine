import { Container, Flex, Image, Modal, Stack, Text } from "@mantine/core"
import { usePokemonModalStore } from "../store/pokemonModal.store"
import { shallow } from "zustand/shallow"
import notFoundImg from "../assets/NotFoundImg.png"
import { usePokemon } from "../hooks/usePokemon"
import { ModalSkeleton } from "./ModalSkeleton"

interface Props {
  pokemonName: string
}

export const PokemonModal = ({ pokemonName }: Props) => {
  const { setIsActive, isActive } = usePokemonModalStore(
    (state) => ({
      setIsActive: state.setIsActive,
      isActive: state.isActive,
    }),
    shallow
  )

  const {
    pokemonQuery: { data, isLoading },
  } = usePokemon(pokemonName)

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
        {data && (
          <>
            <Flex justify={"center"}>
              <Image
                src={data?.sprites?.front_default ?? notFoundImg}
                alt={data?.name}
                width={200}
                height={"auto"}
              />
            </Flex>
            <Stack spacing={6} mt={40}>
              <Text>
                <Text span fw={700} c={"light"}>
                  {" "}
                  Name:{" "}
                </Text>
                {data?.name}
              </Text>
            </Stack>
          </>
        )}
        {isLoading && <ModalSkeleton />}
      </Container>
    </Modal>
  )
}
