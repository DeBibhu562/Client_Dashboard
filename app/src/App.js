import "./App.css";
import Sidebar from "./Components/Sidebar";
import AccountOverview from "./Components/AccountsOverView.jsx";
import { Mainpage } from "./Pages/Mainpage.jsx";
import React, { useState } from "react";


function App() {
  const [mainAccTog, setMainAccTog] = useState(true);
  const handleMainAcc = () => {
    setMainAccTog(!mainAccTog);
  };
  return (
    <div className="App">
      <Sidebar handleMainAcc={handleMainAcc} setMainAccTog={setMainAccTog} mainAccTog={mainAccTog}/>
      {mainAccTog && <Mainpage />}
      {!mainAccTog && <AccountOverview />}
    </div>

  );
}

export default App;