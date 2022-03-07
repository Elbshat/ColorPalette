import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = React.memo(
  ({ classes, history, openDeleteDialog, paletteName, emoji, colors, id }) => {
    const deletePalette = (e) => {
      e.stopPropagation();
      openDeleteDialog(id);
    };
    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      ></div>
    ));

    return (
      <div
        className={classes.root}
        onClick={() => history.push(`/palette/${id}`)}
      >
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
);

export default withStyles(styles)(MiniPalette);
