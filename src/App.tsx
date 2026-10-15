import { useState } from "react";
import Nav from "./components/Nav";
import type { ITechnology } from "./Types/Tecnologies";
import Banner from "./components/Banner";

const technologiesFetch = async (): Promise<ITechnology> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const[technologiesPromise] = useState(()=> technologiesFetch)


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
    </>
  );
}

export default App;
