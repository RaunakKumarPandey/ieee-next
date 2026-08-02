
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  "Home",
  "About",
  "Chapters",
  "Events",
  "Team",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          IEEE STB MMMUT
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-cyan-400 duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-slate-900 px-6 pb-6">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="py-3 text-gray-300 hover:text-cyan-400"
            >
              {item}
            </a>
            
          ))}
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#chapters">Chapters</a>
        </div>
      )}
    </motion.nav>
  );
}