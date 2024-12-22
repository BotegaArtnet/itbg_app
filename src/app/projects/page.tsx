import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Project One',
    description: 'A minimal design system built with modern tools.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Project Two',
    description: 'Clean and efficient data visualization dashboard.',
    tech: ['React', 'D3.js', 'TailwindCSS'],
  },
  {
    name: 'Project Three',
    description: 'Responsive and accessible component library.',
    tech: ['TypeScript', 'Storybook', 'Jest'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              A collection of minimalist projects focused on clean design and efficient functionality.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 space-y-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={item}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 