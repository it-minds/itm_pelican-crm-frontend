import { Grid, Skeleton, Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props {
  numSkeletons: number;
}

const SupplierCardsSkeleton: FC<Props> = ({numSkeletons}) => {

  const skeletonsToRender = () => {
    let skeletonCards: Array<ReactNode> = [];

    for (let i = 0; i < numSkeletons; i++) {
      skeletonCards.push(
        <Stack spacing={1} margin={1} marginTop={2}>
          <Skeleton variant="rectangular" width={200} height={150} />
          <Skeleton variant="rounded" height={15} width={150} />
        </Stack>
      )
    }

    return skeletonCards;
  }

  return (
    <Grid container >
      {skeletonsToRender()}
    </Grid>
  )
}

export default SupplierCardsSkeleton