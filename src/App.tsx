import "./App.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import Aside from "./components/Aside/index";
import Choice from "./components/Choice/Choice";
import Header from "./components/Header";

const theme = createTheme({
  palette: {
    secondary: {
      contrastText: "#fefefe",
      main: "#4CAF50",
    },
  },
});

function App() {
  const [selectedOption, setSelectedOption] = useState<string>("choice");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header setSelectedOption={setSelectedOption} />
        <main>
          <Aside />
          {selectedOption === "choice" ? <Choice /> : null}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
