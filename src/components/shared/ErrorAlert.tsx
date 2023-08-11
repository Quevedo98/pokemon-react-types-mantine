import { Alert, Flex } from "@mantine/core"
import { FiAlertCircle } from "react-icons/fi"

interface Props {
  message: string
}

export const ErrorAlert = ({ message }: Props) => {
  return (
    <Flex mx={"auto"}>
      <Alert icon={<FiAlertCircle />} title="Oops!" color="red">
        {message}
      </Alert>
    </Flex>
  )
}
