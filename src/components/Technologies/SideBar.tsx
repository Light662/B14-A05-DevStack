import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../Types/Tecnologies";
import SideBarCard from "./SideBarCard";

interface ISideBarProps {
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>;
}

const SideBar = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISideBarProps) => {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <SideBarCard
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />
    </aside>
  );
};

export default SideBar;
