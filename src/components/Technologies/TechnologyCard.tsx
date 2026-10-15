import type { ITechnologies } from "../../Types/Tecnologies";

interface ITechnologyCardProps {
  technology: ITechnologies;
}

const TechnologyCard = ({ technology }: ITechnologyCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      {/* Icon and badge */}
      <div className="mb-3 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-7 w-7 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Name and description */}
      <h3 className="mb-1 text-sm font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mb-3 flex-1 text-[10px] leading-relaxed text-slate-500">
        {technology.description}
      </p>

      {/* Category, difficulty and rating */}
      <div className="mb-3 flex items-center justify-between gap-1 text-[9px]">
        <span className="rounded bg-slate-100 px-1.5 py-1 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">{technology.difficulty}</span>

        <span className="flex items-center gap-1 whitespace-nowrap font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Action button */}
      <button
        type="button"
        className="cursor-pointer w-full rounded-md bg-slate-950 px-3 py-2 text-[10px] font-medium text-white transition-colors hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
