import sizes from "./sizes";
const drawerWidth = 400;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [sizes.down("xs")]: { marginRight: theme.spacing(1), padding: "5px" },
  },
  heading: {
    fontSize: "1.25rem",
    [sizes.down("xs")]: { fontSize: "0.9rem" },
  },
  navBtns: {
    marginRight: "1rem",
    "& button": {
      margin: "0 0.5rem",
    },
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      marginRight: "0.5rem",
      "& button": {
        margin: "0 3px",
        padding: "5px",
        fontSize: "10px",
        minWidth: "50px",
      },
    },
  },
});
export default styles;
