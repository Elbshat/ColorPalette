import React from "react";
import PaletteMetaForm from "./PaletteMetaForm";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import styles from "./styles/NewPaletteFormNavStyles";

const NewPaletteFormNav = (props) => {
  const { classes, open, palettes, handleSubmit, handleDrawerOpen } = props;
  const [formOpen, setFormOpen] = React.useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.heading}>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button variant="contained" color="secondary">
              GoBack
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setFormOpen(true)}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formOpen && (
        <PaletteMetaForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          hideForm={() => setFormOpen(false)}
        />
      )}
    </div>
  );
};
export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);
