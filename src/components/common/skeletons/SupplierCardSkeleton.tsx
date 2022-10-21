import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

const SupplierCardSkeleton = () => {
  return (
    <Grid container >
      <Stack spacing={1} margin={1} marginTop={2}>
        <Skeleton variant="rectangular" width={200} height={150} />
        <Skeleton variant="rounded" height={15} width={150} />
      </Stack>
      <Stack spacing={1} margin={1} marginTop={2}>
        <Skeleton variant="rectangular" width={200} height={150} />
        <Skeleton variant="rounded" height={15} width={150} />
      </Stack>
      <Stack spacing={1} margin={1} marginTop={2}>
        <Skeleton variant="rectangular" width={200} height={150} />
        <Skeleton variant="rounded" height={15} width={150} />
      </Stack>
    </Grid>
  )
}

export default SupplierCardSkeleton