import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
import seedColors from "../seedColores";
import { generatePalette } from "../colorHelpers";

function App() {
  const [palettes, setPalettes] = React.useState(() => {
    const savedPlettes = JSON.parse(window.localStorage.getItem("palettes"));
    return savedPlettes || seedColors;
  });

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };
  const deletePalette = (id) => {
    setPalettes((prevPalettes) =>
      prevPalettes.filter((palette) => palette.id !== id)
    );
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  React.useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Page>
                    <PaletteList
                      palettes={palettes}
                      {...props}
                      deletePalette={deletePalette}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/new"
                render={(props) => (
                  <Page>
                    <NewPaletteForm
                      {...props}
                      savePalette={savePalette}
                      palettes={palettes}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={(props) => (
                  <Page>
                    <Palette
                      palette={generatePalette(
                        findPalette(props.match.params.id)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(props) => (
                  <Page>
                    <SingleColorPalette
                      colorId={props.match.params.colorId}
                      palette={generatePalette(
                        findPalette(props.match.params.paletteId)
                      )}
                    />
                  </Page>
                )}
              />

              <Route
                render={(props) => (
                  <Page>
                    <PaletteList
                      palettes={palettes}
                      {...props}
                      deletePalette={deletePalette}
                    />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
