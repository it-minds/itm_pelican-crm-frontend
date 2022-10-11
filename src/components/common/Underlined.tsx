import { createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import React from "react";

export interface Props {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  centered?: boolean;
}

const borderWidth = 10;
const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&::before": {
        backgroundColor: theme.palette.secondary.main,
        bottom: `${-borderWidth}%`,
        content: "''",
        height: `${borderWidth}%`,
        left: 0,
        position: "absolute",
        width: 0,
        transition: ".2s ease-out width",
      },
      display: "inline-block",
      position: "relative",
      marginBottom: 8,
      width: "fit-content",
    },
    active: ({ centered }: { centered?: boolean }) => {
      const centeredStyles = {
        width: "80%",
        left: "10%",
      };

      return centered
        ? {
            "&::before": centeredStyles,
          }
        : {
            "&::before": {
              [theme.breakpoints.up("md")]: {
                width: "60%",
              },
              [theme.breakpoints.down("sm")]: centeredStyles,
            },
          };
    },
  })
);

const AppUnderlined = ({
  children,
  className,
  active = true,
  ...props
}: Props) => {
  const classes = styles(props);

  return (
    <div
      className={[
        className,
        classes.root,
        ...(active ? [classes.active] : []),
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default AppUnderlined;
