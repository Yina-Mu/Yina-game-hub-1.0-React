{
  /* #1 import React */
}
import React from "react";
import ReactDOM from "react-dom/client";
{
  /* #2 import third part libraries */
}
import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
} from "@chakra-ui/react";
{
  /* #3 import own libraries */
}
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
