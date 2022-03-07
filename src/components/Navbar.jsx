import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

const Navbar = ({ classes, level, changeLevel, handleChange, showSlider }) => {
  const [format, setFormat] = useState("hex");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpenSnackbar(true);
    handleChange(e.target.value);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showSlider && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnackbar}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            key="close"
            aria-label="close"
            color="inherit"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};

export default withStyles(styles)(Navbar);
