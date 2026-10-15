import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnologies } from "../../Types/Tecnologies";
import SideBar from "./SideBar";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnologies[]
  >([]);

  return (
    <section className="container mx-auto">
      {/* Keep your existing heading here */}

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(180px,1fr)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))}
        </div>

        <SideBar
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
    </section>
  );
};

export default Technologies;
