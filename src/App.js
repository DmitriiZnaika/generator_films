import React from 'react';
import './App.css';
import ButtonAppBar from "./components/appBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Album from "./components/mainPart";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <ButtonAppBar/>
        <Album/>
      </React.Fragment>
  );
}

export default App;
