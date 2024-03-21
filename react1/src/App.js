import React from "react";
import { Titulo } from "./Titulo";
import { ListItem } from "./ListItem";
import { Item } from "./Item";
function App() {
  return (
    <>
      <Titulo nombre={"Felipe Moreno"}/>
      <ListItem>
        <Item/>
      </ListItem>
      
    </>
  );
}

export default App;
