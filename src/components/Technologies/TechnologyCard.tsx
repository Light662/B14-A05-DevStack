import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnologies } from "../../Types/Tecnologies";

interface ITechnologyCardProps {
  technology: ITechnologies;
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {
  const isSelected = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );

  const handleAddToStack = () => {
    if (isSelected) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-7 w-7 object-contain"
        />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-2 py-1 text-[9px] font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mb-1 text-sm font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mb-3 flex-1 text-[10px] leading-relaxed text-slate-500">
        {technology.description}
      </p>

      <div className="mb-3 flex items-center justify-between gap-1 border-t border-slate-100 pt-3 text-[9px]">
        <span className="rounded bg-slate-100 px-1.5 py-1 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">{technology.difficulty}</span>

        <span className="flex items-center gap-1 whitespace-nowrap font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={handleAddToStack}
        disabled={isSelected}
        className={`w-full rounded-md px-3 py-2 text-[10px] font-medium text-white transition-colors ${
          isSelected
            ? "cursor-not-allowed bg-emerald-600"
            : "cursor-pointer bg-slate-950 hover:bg-slate-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
