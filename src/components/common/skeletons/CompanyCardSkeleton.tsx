import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React, { FC, ReactNode } from 'react'

interface Props {
  numSkeletons: number;
}

const CompanyCardSkeleton: FC<Props> = ({numSkeletons: numSkeletons}) => {
  
  
  const skeletonsToRender = () => {
    let skeletonCards: Array<ReactNode> = [];

    for (let i = 0; i < numSkeletons; i++) {
      skeletonCards.push(<Skeleton variant="rounded" height={50} />)
    }

    return skeletonCards;
  }

  return (
    <Stack spacing={1} marginTop={2}>
      {skeletonsToRender()}
    </Stack>
  )
}

export default CompanyCardSkeleton