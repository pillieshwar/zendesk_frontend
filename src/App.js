import "./App.css";

import * as React from "react";
import Dashboard from "./component/dashboard";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    </div>
  );
}

export default App;
