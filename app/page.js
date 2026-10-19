
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

const projects = [
  {
    name: "Dev Stack Builder",
    slug: "dev-stack-builder",
    image: "/projects/dev-stack-builder.png",
    description:
      "A React application for building and managing a personalized technology stack.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://inquisitive-panda-dfc975.netlify.app/",
    github: "https://github.com/maliha931/dev-stack-builder",
  },
  {
    name: "Fit Log",
    slug: "fit-log",
    image: "/projects/fit-log.png",
    description:
      "A workout library and planning application built with Next.js.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://fit-log-27o7.vercel.app/",
    github: "https://github.com/maliha-cse/fit-log",
  },
  {
    name: "Bazar Dor",
    slug: "bazar-dor",
    image: "/projects/bazar-dor.png",
    description:
      "A Bengali-first web application focused on essential product prices in Bangladesh.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://bazar-dor-eight-pink.vercel.app/",
    github: "https://github.com/maliha-cse/bazar-dor",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101110] text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-16">
        <a href="#home" className="text-2xl font-bold">
          M<span className="text-lime-400">.</span>
        </a>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300 md:gap-8">
          <a href="#home" className="hover:text-lime-400">Home</a>
          <a href="#about" className="hover:text-lime-400">About</a>
          <a href="#skills" className="hover:text-lime-400">Skills</a>
          <a href="#education" className="hover:text-lime-400">
            Education
          </a>
          <a href="#projects" className="hover:text-lime-400">Projects</a>
          <a href="#contact" className="hover:text-lime-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:px-12"
      >
        <div className="flex-1">
          <p className="mb-4 font-medium tracking-[0.25em] text-lime-400">
            HELLO, I&apos;M
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Mst Zeba
            <br />
            Maliha <span className="text-lime-400">Radiya.</span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-200 md:text-2xl">
            CSE Student & Aspiring Full-Stack Web Developer
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-400">
            I am a Computer Science and Engineering student at Jahangirnagar
            University, passionate about learning web development and building
            useful, user-friendly web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Explore My Work ↗
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-lime-400 px-6 py-3 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-300">
            <a
              href="https://github.com/maliha-cse"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mst-zeba-maliha-radiya-aa436b430"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="shrink-0">
          <img
            src="/profile.jpeg"
            alt="Mst Zeba Maliha Radiya"
            className="h-72 w-72 rounded-full border-2 border-lime-400/50 object-cover object-center md:h-96 md:w-96"
          />
        </div>

      </section>


      {/* About Section */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.25em] text-lime-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            About Me<span className="text-lime-400">.</span>
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                My Programming Journey
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                I am a Computer Science and Engineering student at
                Jahangirnagar University. My programming journey began
                with learning programming fundamentals, and I am now
                exploring modern web development technologies.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Through hands-on projects, I am learning to build
                responsive and user-friendly web applications while
                continuously improving my problem-solving skills.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-white">
                What I Enjoy
              </h3>

              <ul className="mt-5 space-y-4 text-gray-400">
                <li>✦ Learning new technologies</li>
                <li>✦ Building web development projects</li>
                <li>✦ Solving programming problems</li>
                <li>✦ Exploring creative ideas and designs</li>
              </ul>

              <p className="mt-6 leading-7 text-gray-400">
                My goal is to grow as a developer and create useful
                digital experiences through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section
        id="education"
        className="border-t border-white/10 px-6 py-16 md:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.25em] text-lime-400">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Education<span className="text-lime-400">.</span>
          </h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="text-sm text-lime-400">
              CURRENTLY STUDYING
            </p>

            <h3 className="mt-3 text-xl font-bold md:text-2xl">
              B.Sc. in Computer Science and Engineering
            </h3>

            <p className="mt-3 text-gray-300">
              Jahangirnagar University
            </p>

            <p className="mt-2 text-sm text-gray-400">
              2024 – Present
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Studying computer science fundamentals, programming,
              algorithms, databases, and software development.
            </p>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 text-center">
        <p className="text-lime-400">WHAT I WORK WITH</p>

        <h2 className="mt-3 text-3xl font-bold">My Skills</h2>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-gray-200 transition hover:border-lime-400/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm tracking-[0.25em] text-lime-400">
            SOME OF MY WORK
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center leading-7 text-gray-400">
            Here are some of the projects I have built while learning and
            exploring modern web development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
              >
                {/* Project Screenshot */}
                <div className="overflow-hidden bg-[#181a18]">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    className="h-48 w-full object-cover object-top transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>

                  <p className="mt-3 flex-1 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-lime-400 hover:underline"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-lime-400"
                    >
                      GitHub ↗
                    </a>
                  </div>

                  {/* Details Page Button */}
                  <a
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-block rounded-lg border border-lime-400 px-5 py-3 text-center font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
                  >
                    View Details →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-16 text-center"
      >
        <p className="text-lime-400">LET&apos;S CONNECT</p>

        <h2 className="mt-3 text-3xl font-bold">Get In Touch</h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-400">
          I am always interested in learning, collaborating, and exploring new
          opportunities in web development.
        </p>

        <a
          href="mailto:20240659122maliha@juniv.edu"
          className="mt-5 inline-block break-all text-lime-400 hover:underline"
        >
          20240659122maliha@juniv.edu
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
        Built with Next.js & Tailwind CSS · © 2026 Zeba Maliha Radiya
      </footer>
    </main>
  );
}
