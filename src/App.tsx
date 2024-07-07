import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Fragment>
      <Grid
        templateAreas={{
          base: `"nav" "aside"`,
          md: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area="aside" bg="green">
            Aside: Category
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          <GameGrid />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default App;
