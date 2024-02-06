import React from "react";
import ThemeComponent from "./Theme/ThemeComponent";
import ThemeProvider from "./Theme/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
};

export default App;
