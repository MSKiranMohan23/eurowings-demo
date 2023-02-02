import React from "react";
import "./App.scss";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="header"><p>EUROWINGS</p></header>
      <hr />
      <Search />
    </div>
  );
}

export default App;
