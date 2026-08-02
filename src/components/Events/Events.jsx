import { motion } from "framer-motion";
import events from "../../data/events";

export default function Events() {
  return (
    <section
      id="events"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Events</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Workshops, Hackathons, Seminars and Technical Activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {events.map((event) => (

            <motion.div
              whileHover={{
                y: -10
              }}
              key={event.id}
              className="overflow-hidden rounded-2xl bg-slate-800 border border-slate-700"
            >

              <img
                src={event.image}
                alt={event.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-cyan-400 text-sm">
                  {event.category}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {event.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {event.description}
                </p>

                <div className="mt-6 flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    {event.date}
                  </span>

                  <button className="text-cyan-400 hover:text-cyan-300">
                    Read More →
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}