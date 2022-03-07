import sizes from "./sizes";
const styles = {
  Palette: {
    height: "100vh",
    // display: "flex",
    // flexDirection: "column",
  },
  colors: { height: "90%" },
  goBack: {
    height: "50%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      outline: "none",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "1rem",
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textDecoration: "none",
      lineHeight: "30px",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};
export default styles;
