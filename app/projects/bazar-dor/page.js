
const project = {
  name: "Bazar Dor",
  subtitle: "Product Price Information Web Application",
  description:
    "Bazar Dor is a Bengali-first web application focused on helping users explore essential product price information in Bangladesh through a simple and accessible interface.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  live: "https://bazar-dor-eight-pink.vercel.app/",
  github: "https://github.com/maliha-cse/bazar-dor",
  challenges: [
    "Building a responsive interface for different screen sizes.",
    "Organizing product information in a clear and readable layout.",
    "Working with TypeScript while developing reusable UI components.",
    "Creating a user-friendly experience for Bengali-speaking users.",
  ],
  improvements: [
    "Add product search and category filters.",
    "Show price history and compare prices across different sources.",
    "Improve product data freshness and provide clear source information.",
  ],
};

export default function BazarDorDetails() {
  return (
    <main className="min-h-screen bg-[#101110] px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-5xl">
        <a href="/#projects" className="text-sm text-lime-400 hover:underline">
          ← Back to Projects
        </a>

        <p className="mt-12 text-sm tracking-[0.25em] text-lime-400">
          PROJECT DETAILS
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
          Bazar Dor<span className="text-lime-400">.</span>
        </h1>

        <h2 className="mt-4 text-xl text-gray-300 md:text-2xl">
          {project.subtitle}
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/projects/bazar-dor.png"
            alt="Bazar Dor website screenshot"
            className="h-auto w-full"
          />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">About the Project</h2>
          <p className="mt-4 leading-8 text-gray-400">
            {project.description}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Technologies Used</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-lime-400/30 bg-lime-400/5 px-4 py-2 text-sm text-lime-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Challenges Faced</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-gray-400">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Future Improvements</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-gray-400">
            {project.improvements.map((improvement) => (
              <li key={improvement}>{improvement}</li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-300"
          >
            Visit Live Website ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-lime-400 px-6 py-3 font-semibold text-lime-400 hover:bg-lime-400 hover:text-black"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}
