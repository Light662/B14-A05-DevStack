import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnologies } from "../../Types/Tecnologies";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="container mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology cards and sidebar */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(180px,1fr)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>

        {/* Your Stack sidebar */}
        <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Your Stack</h3>

          <p className="mt-1 text-xs text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-3 flex min-h-16 items-center justify-center rounded-lg border border-dashed border-slate-200 p-3">
            <p className="text-center text-xs text-slate-400">
              Your stack is empty.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
