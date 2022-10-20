import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const WallOfClientsCardSkeleton = () => {
  return (
    <Stack spacing={1} marginTop={2}>
      <Skeleton variant="rounded" height={40} />
    </Stack>
  )
}

export default WallOfClientsCardSkeleton