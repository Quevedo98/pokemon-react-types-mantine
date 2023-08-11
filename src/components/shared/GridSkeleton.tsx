import { Grid, Skeleton } from "@mantine/core"

export const GridSkeleton = () => {
  const array = new Array(12).fill(0)
  return (
    <>
      {array.map((_, index) => (
        <Grid.Col xs={6} sm={4} md={3} key={index}>
          <Skeleton height={70} width={"100%"} />
        </Grid.Col>
      ))}
    </>
  )
}
