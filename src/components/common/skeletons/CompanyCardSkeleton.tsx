import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const CompanyCardSkeleton = () => {
  return (
    <Stack spacing={1} marginTop={2}>
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
    </Stack>
  )
}

export default CompanyCardSkeleton