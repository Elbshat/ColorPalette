import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

function Palette({ classes, palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors, paletteName, emoji, id } = palette;
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };
  const changeFormat = (value) => {
    setFormat(value);
  };
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      id={color.id}
      paletteId={id}
      showFullPalette={true}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showSlider={true}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
