import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../Types/Tecnologies";

interface ISideBarCardProps {
  selectedTechnologies: ITechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>;
}

const SideBarCard = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISideBarCardProps) => {
  const handleRemove = (technology: ITechnologies) => {
    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== technology.id),
    );

    toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <div>
      <div className="items-center">
        <h3 className="text-sm font-bold text-slate-900">Your Stack</h3>

        <span className="text-xs text-slate-500">
          {selectedTechnologies.length}{" "}
          {selectedTechnologies.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </span>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-3 flex min-h-16 items-center justify-center rounded-lg border border-dashed border-slate-200 p-3">
          <p className="text-center text-xs text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-3 flex flex-col gap-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-100 p-2"
              >
                <img
                  src={technology.icon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-semibold text-slate-900">
                    {technology.name}
                  </h4>

                  <p className="text-[10px] text-slate-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(technology)}
                  aria-label={`Remove ${technology.name}`}
                  className="cursor-pointer rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="btn btn-sm mt-4 w-full border-red-200 bg-white text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default SideBarCard;
