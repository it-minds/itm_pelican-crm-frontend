import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const SupplierGraphSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"80%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"70%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"60%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"55%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"50%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"45%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"40%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"25%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"15%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"12%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"10%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"8%"} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" height={20} width={20} />
        <Skeleton variant="rounded" height={20} width={"5%"} />
      </Stack>
    </Stack>
  )
}

export default SupplierGraphSkeleton