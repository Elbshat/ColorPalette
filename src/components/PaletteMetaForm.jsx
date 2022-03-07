import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function PaletteMetaForm(props) {
  const { palettes, handleSubmit, hideForm } = props;
  const [stage, setStage] = React.useState("form");
  const [newPaletteName, setNewPaletteName] = React.useState("");

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [palettes]);

  const savePalette = (emoji) => {
    handleSubmit({ paletteName: newPaletteName, emoji: emoji.native });
    setStage("");
  };

  return (
    <React.Fragment>
      <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette emoji</DialogTitle>
        <Picker title="Choose an emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => setStage("emoji")}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new Palette. Make sure it's unique
            </DialogContentText>

            <TextValidator
              fullWidth
              margin="normal"
              name="newPaletteName"
              label="Palette Name"
              value={newPaletteName}
              onChange={(e) => setNewPaletteName(e.target.value)}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["this field is required", "Name already used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </React.Fragment>
  );
}
export default PaletteMetaForm;
