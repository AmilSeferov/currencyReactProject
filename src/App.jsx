import { useState } from "react";
import "./App.css";
import CurrencyTable from "./components/currencyTable/currencyTable";
import CurrencyConverter from "./components/currencyConverter/currencyConverter";
function App() {
  
  return (
    <>
      <div className="aMain">
        <CurrencyConverter />
        <CurrencyTable />
      </div>
    </>
  );
}

export default App;
