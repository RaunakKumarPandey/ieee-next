import { motion } from "framer-motion";
import logo from "../../assets/images/IEEE_LOGO.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">

      {/* Glow Effect */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-5">
            IEEE Student Branch
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Innovate.
            <br />
            Inspire.
            <br />
            <span className="text-cyan-400">
              Impact.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-xl">
            Empowering students through innovation, technology,
            research and leadership at Madan Mohan Malaviya
            University of Technology.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold">
              Explore Events
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition px-8 py-3 rounded-xl">
              Join IEEE
            </button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <img
            src={logo}
            alt="IEEE Logo"
            className="w-80 md:w-[420px] drop-shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          />

        </motion.div>

      </div>
      <section
        id="home"
        className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center"
      ></section>
    </section>
    
  );
}