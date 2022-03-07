import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";

function ColorBox({
  classes,
  name,
  background,
  id,
  paletteId,
  showFullPalette,
}) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className={classes.ColorBox} style={{ background: background }}>
        <div
          className={clsx(classes.copyOverlay, {
            [classes.showOverlay]: copied,
          })}
          style={{ background: background }}
        ></div>
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>Copied</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </>
        {showFullPalette && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
