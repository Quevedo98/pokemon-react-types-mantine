import { Alert, Flex } from "@mantine/core"

interface Props {
  message: string
}

export const ErrorAlert = ({ message }: Props) => {
  return (
    <Flex mx={"auto"}>
      <Alert title="Oops!" color="red">
        {message}
      </Alert>
    </Flex>
  )
}
