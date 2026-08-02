import { motion } from "framer-motion";

const chapters = [
  {
    title: "Computer Society",
    icon: "💻",
    desc: "Explore software development, AI, web technologies and programming."
  },
  {
    title: "Women in Engineering",
    icon: "👩‍💻",
    desc: "Empowering women in technology through leadership and innovation."
  },
  {
    title: "Robotics & Automation",
    icon: "🤖",
    desc: "Build intelligent robots and automation systems with hands-on projects."
  },
  {
    title: "Signal Processing",
    icon: "📡",
    desc: "Learn image processing, communication systems and digital signal processing."
  },
];

export default function Chapters() {
  return (
    <section
      id="chapters"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            IEEE <span className="text-cyan-400">Chapters</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Discover the technical societies that help students grow
            through workshops, projects and research.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
            >
              <div className="text-6xl mb-6">
                {chapter.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400">
                {chapter.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {chapter.desc}
              </p>

              <button className="mt-8 px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}