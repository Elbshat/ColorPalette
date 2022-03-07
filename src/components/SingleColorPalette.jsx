import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

const SingleColorPalette = ({ palette, colorId, classes }) => {
  const [format, setFormat] = useState("hex");
  const changeFormat = (value) => {
    setFormat(value);
  };
  const gatherShades = () => {
    let allShades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      allShades.push(allColors[key].find((color) => color.id === colorId));
    }

    return allShades.slice(1);
  };

  const colorBoxes = gatherShades().map((color) => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color[format]}
      showFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showSlider={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
