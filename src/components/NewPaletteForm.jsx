import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from "@material-ui/core";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import { arrayMoveImmutable } from "array-move";
import useStyles from "./styles/NewPaletteFormStyles";
import seedColors from "../seedColores";

export default function NewPaletteForm({ maxColors = 20, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [colors, setColors] = React.useState(seedColors[0].colors);
  const isPaletteFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (palette) => {
    const newPalette = {
      paletteName: palette.paletteName,
      id: palette.paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: palette.emoji,
    };
    props.savePalette(newPalette);
    props.history.push("/");
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  const removeColor = (colorName) => {
    const newColors = colors.filter((color) => color.name !== colorName);
    setColors(newColors);
  };
  const addRandomColor = () => {
    const allColors = seedColors.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];

      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }

    setColors([...colors, randomColor]);
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <NewPaletteFormNav
        open={open}
        palettes={props.palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => setColors([])}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={isPaletteFull}
              onClick={addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
