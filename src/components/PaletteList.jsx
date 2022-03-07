import React, { useState, useMemo } from "react";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";

const PaletteList = ({ palettes, classes, history, deletePalette }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [deletepaletteId, setDeletePaletteId] = useState("");

  const openingDialog = (id) => {
    setOpenDialog(true);
    setDeletePaletteId(id);
  };
  const memoizedOpeningDialog = useMemo(() => openingDialog, []);
  const closeDialog = () => {
    setOpenDialog(false);
    setDeletePaletteId("");
  };
  const handleDelete = () => {
    deletePalette(deletepaletteId);
    closeDialog();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palette List</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                key={palette.id}
                {...palette}
                history={history}
                openDeleteDialog={memoizedOpeningDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDialog}
        aria-labelledby="delete dialog title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete dialog title">Delete this Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};
export default withStyles(styles)(PaletteList);
