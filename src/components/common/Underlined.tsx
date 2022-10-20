import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react'
import { SystemStyleObject, Theme } from '@mui/system';

export type Props = {
  children: ReactNode;
  className?: string
} & StyleProps;

type StyleProps = {
  active?: boolean;
  dynamic?: boolean;
}

const borderWidth = 10;

const StaticUnderline = styled(Box)<Props>(({ theme }) => (props: Props) => ({
  "&::before": {
    backgroundColor: theme.palette.secondary.main,
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    [theme.breakpoints.up("xs")]: {
      width: "80%",
      left: "10%",
      position: "absolute",
      "@keyframes expand": {
        from: {
          width: "10%"
        },
        to: {
          width: "90%"
        }
      },
      animation: "expand .5s ease"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
      left: "0%",
      position: "absolute",
    "@keyframes expand": {
      from: {
        width: "0%"
      },
      to: {
        width: "60%"
      }
    },
    animation: "expand .5s ease"
    },
  },
  display: "inline-block",
  position: "relative",
  width: "fit-content"
}));

const DynamicUnderline = styled(Box)<Props>(({ theme }) => (props: Props) => ({
  "&::before": {
    backgroundColor: theme.palette.secondary.main,
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    [theme.breakpoints.up("xs")]: {
      width: "80%",
      left: "10%",
      position: "absolute",
      "@keyframes expand": {
        from: {
          width: "10%"
        },
        to: {
          width: "90%"
        }
      },
      animation: "expand .5s ease"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
      left: "0%",
      position: "absolute",
    "@keyframes expand": {
      from: {
        width: "0%"
      },
      to: {
        width: "60%"
      }
    },
    animation: "expand .5s ease"
    },
  },
  display: "inline-block",
  position: "relative",
  width: "fit-content"
}));

const Underlined = ({
  children,
  active = true,
  dynamic = false,
  ...props
}: Props) => {

  // <Box sx={{...(active && underlineStyles)}}>    Comment kept as a reference to previous, cleaner code
  if (active) {
    if (dynamic) {
      return (
        <DynamicUnderline>
          {children}
        </DynamicUnderline>
      )
    }
    else {
      return (
        <StaticUnderline>
          {children}
        </StaticUnderline>
      )
    }
  }
  else {
    return (
      <Box>
        {children}
      </Box>
    )
  }
}

export default Underlined