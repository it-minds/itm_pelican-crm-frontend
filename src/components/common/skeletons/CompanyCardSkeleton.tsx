import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const skeletonCards = new Array<string>(4);

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

{/* <Stack spacing={1}>
      {graphSkeletonAttr.map(skeleton => (
        <Stack spacing={4} direction="row" alignItems="center">
          <Skeleton variant="rectangular" height={12} width={"10%"} />
          <Skeleton variant="rounded" height={20} width={skeleton.width} />
        </Stack>
      ))}
    </Stack> */}