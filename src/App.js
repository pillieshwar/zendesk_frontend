import "./App.css";

import * as React from "react";
import Dashboard from "./component/dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./component/loginform";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <Dashboard /> */}
        <LoginForm />
      </ChakraProvider>
    </div>
  );
}

export default App;
