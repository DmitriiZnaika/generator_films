import React from 'react';
import './App.css';
import ButtonAppBar from "./components/appBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "./components/mainPart";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <ButtonAppBar/>
        <Main/>
      </React.Fragment>
  );
}

export default App;
