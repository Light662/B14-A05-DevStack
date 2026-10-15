import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies/Technologies";
import type { ITechnologies } from "./Types/Tecnologies";

const technologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to load technologies");
  }

  return res.json();
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} />

      <Suspense fallback={<p className="p-6">Loading technologies...</p>}>
        <Nav />
        <Banner />
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
