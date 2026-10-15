import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import type { ITechnologies } from "./Types/Tecnologies";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies/Technologies";

const technologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const[technologiesPromise] = useState<Promise<ITechnologies[]>>(()=>technologiesFetch())


  return (
    <>
      <Suspense>
        <Nav></Nav>
        <Banner></Banner>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
