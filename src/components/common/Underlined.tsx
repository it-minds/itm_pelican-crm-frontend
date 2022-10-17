import { Box } from '@mui/material';
import React, { ReactNode } from 'react'

export interface Props {
  children: ReactNode;
}

const borderWidth = 10;

const underlineStyles = {
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
    position: "absolute",
    transition: ".2s ease-out width"
  },
  display: "inline-block",
  position: "relative",
  marginBottom: 8,
  width: "fit-content"
}

const Underlined = ({
  children,
  ...props
}: Props) => {


  return (
    <Box sx={{...underlineStyles}}>
      {children}
    </Box>
  )
}

export default Underlined

/**
 * En div der indsættes udenom en anden div
 * indeholder en baggrundsfarve
 * fylder X% af den div den wrapper
 */



//  export interface Props {
//   children: React.ReactNode;
//   active?: boolean;
//   className?: string;
//   centered?: boolean;
// }

// const borderWidth = 10;

// const styles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       "&::before": {
//         backgroundColor: theme.palette.secondary.main,
//         bottom: `${-borderWidth}%`,
//         content: "''",
//         height: `${borderWidth}%`,
//         left: 0,
//         position: "absolute",
//         width: 0,
//         transition: ".2s ease-out width",
//       },
//       display: "inline-block",
//       position: "relative",
//       marginBottom: 8,
//       width: "fit-content",
//     },
//     active: ({ centered }: { centered?: boolean }) => {
//       const centeredStyles = {
//         width: "80%",
//         left: "10%",
//       };

//       return centered
//         ? {
//             "&::before": centeredStyles,
//           }
//         : {
//             "&::before": {
//               [theme.breakpoints.up("md")]: {
//                 width: "60%",
//               },
//               [theme.breakpoints.down("sm")]: centeredStyles,
//             },
//           };
//     },
//   })
// );

// const AppUnderlined = ({
//   children,
//   className,
//   active = true,
//   ...props
// }: Props) => {
//   const classes = styles(props);

//   return (
//     <div
//       className={[
//         className,
//         classes.root,
//         ...(active ? [classes.active] : []),
//       ].join(" ")}
//     >
//       {children}
//     </div>
//   );
// };

// export default AppUnderlined;