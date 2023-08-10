import { Flex, Skeleton, Stack } from "@mantine/core"

export const ModalSkeleton = () => {
  return (
    <>
      <Flex justify={"center"}>
        <Skeleton height={200} width={200} radius={20} />
      </Flex>
      <Stack spacing={6} mt={40}>
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </Stack>
    </>
  )
}
