import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import team from "../../data/team";

export default function Team() {
  return (
    <section id="team" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Meet Our <span className="text-cyan-400">Team</span>
          </h2>

          <p className="text-gray-400 mt-5">
            The passionate students leading IEEE Student Branch MMMUT.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member) => (

            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {member.position}
                </p>

                <div className="flex gap-5 mt-6 text-2xl">

                  <a href={member.linkedin}>
                    <FaLinkedin className="hover:text-cyan-400 duration-300" />
                  </a>

                  <a href={member.github}>
                    <FaGithub className="hover:text-cyan-400 duration-300" />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}