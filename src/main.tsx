{
  /* #1 import React */
}
import React from "react";
import ReactDOM from "react-dom/client";
{
  /* #2 import third part libraries */
}
import { ChakraProvider } from "@chakra-ui/react";
{
  /* #3 import own libraries */
}
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
