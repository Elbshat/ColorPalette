import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "./styles/ColorPickerFormStyles";

const ColorPickerForm = (props) => {
  const { isPaletteFull, addNewColor, colors, classes } = props;
  const [currentColor, setCurrentColor] = React.useState("red");
  const [newColorName, setNewColorName] = React.useState("");

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  const updateCurrentColor = (color) => {
    setCurrentColor(color.hex);
  };
  const handleSubmit = () => {
    addNewColor({ color: currentColor, name: newColorName });
    setNewColorName("");
  };

  return (
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={(newColor) => updateCurrentColor(newColor)}
        className={classes.picker}
      />
      <ValidatorForm
        onSubmit={handleSubmit}
        className={classes.form}
        instantValidate={false}
      >
        <TextValidator
          className={classes.colorNameInput}
          name="newColorName"
          variant="filled"
          margin="normal"
          placeholder="Color Name"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "Color name must be unique",
            "Color already used!!",
          ]}
        />

        <Button
          variant="contained"
          className={classes.addColor}
          style={{
            backgroundColor: isPaletteFull ? "gray" : currentColor,
          }}
          type="submit"
          disabled={isPaletteFull}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
};
export default withStyles(styles)(ColorPickerForm);
