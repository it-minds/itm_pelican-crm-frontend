const borderWidth = 10;

export const staticUnderlineStyles = {
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
    position: "absolute",
  },
  display: "inline-block",
  position: "relative",
  width: "fit-content"
}

export const dynamicUnderlineStyles = {
  "&::before": {
    backgroundColor: "secondary.main",
    content: "''",
    bottom: `${-borderWidth}%`,
    height: `${borderWidth}%`,
    width: "60%",
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
  display: "inline-block",
  position: "relative",
  width: "fit-content"
}