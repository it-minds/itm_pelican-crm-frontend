import { Typography } from '@mui/material'
import React, { FC } from 'react'

/**
 * Importer tema, så der kan tilgås (farver, spacing, etc.)
 * Lav komponentets styling her inde i komponenten
 * Lav det til en slags wrapper man bare kan smide rundt om et element
 * Skal kun give sit direkte barn den specifikke styling!
 */

export type Props = {
  children: React.ReactNode;
}

const UnderlinedV5: FC<Props> = ({
  children
}) => {
  return (
    <>
      <Typography>
        Her er underlined
      </Typography>
      {children}
    </>
  )
}

export default UnderlinedV5
/*
  lave wrapper / style til komponenter der skal have understregning
  Skal kun lave understregning på det direkte barn
  skal "slide" ind når den renderes (cirka 0.3 sek) fra venstre mod højre
  skal kunne vælge om der skal animation på (prop / state?)
 */