import { makeStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import sizes from "./sizes";

const useStyles = makeStyles(() => ({
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: ({ color }) => ({
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "10px",
    color:
      chroma(color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)",

    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  }),
  deleteIcon: {
    transition: "all 0.5s ease-in-out",
  },
}));
export default useStyles;
