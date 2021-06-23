import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

export function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}
