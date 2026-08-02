import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
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
            About <span className="text-cyan-400">IEEE STB MMMUT</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            IEEE Student Branch MMMUT is a vibrant technical community
            dedicated to innovation, research, leadership and professional
            development. We organize workshops, hackathons, technical talks,
            competitions and networking opportunities for students.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Innovation
            </h3>

            <p className="text-gray-400 mt-4">
              Encouraging students to solve real-world engineering
              problems through creativity and technology.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Leadership
            </h3>

            <p className="text-gray-400 mt-4">
              Building confident leaders through teamwork,
              volunteering and IEEE activities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Research
            </h3>

            <p className="text-gray-400 mt-4">
              Promoting research culture, publications and
              technical excellence among students.
            </p>
          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">150+</h3>
            <p className="text-gray-400 mt-2">Members</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">25+</h3>
            <p className="text-gray-400 mt-2">Events</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
            <p className="text-gray-400 mt-2">Workshops</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-400 mt-2">Technical Chapters</p>
          </div>

        </div>

      </div>
    </section>
  );
}