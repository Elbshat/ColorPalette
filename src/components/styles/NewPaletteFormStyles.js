import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    maxWidth: drawerWidth,
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    maxWidth: drawerWidth,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttons: { width: "100%" },
  button: { width: "50%" },
}));
export default useStyles;
