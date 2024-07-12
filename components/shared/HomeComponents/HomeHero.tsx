import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { people } from "@/lib/constants";


const HomeHero = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center flex-1 p-4 pt-10 md:p-20">
      <p className="border px-4 py-1 rounded-full font-bold text-center hover:scale-105 transition duration-500">
        🚀Create Once, Share Everywhere, Succeed Always.{" "}
      </p>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold  dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Create Stunning Pages Instantly, Share Seamlessly, and
        <Highlight className=" text-white">Grow Your Customer Base</Highlight>
        with Real-Time Analytics!
      </motion.h1>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Explore Now
      </button>
    </div>
  );
};

export default HomeHero;
