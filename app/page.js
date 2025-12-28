import { Bangers } from "next/font/google";
import { Rubik_Dirt } from "next/font/google";
import Ballpit from "./components/Ballpit";
import LogoLoop from "./components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

const rubik = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
});

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 md:gap-8 px-4 bg-black text-white py-8">
      {/* Titre et sous-titre */}
      <div className="flex flex-col items-center gap-2 md:gap-4 max-w-3xl text-center w-full">
        <h2
          className={`${rubik.className} text-xl md:text-4xl lg:text-8xl font-mono font-bold tracking-wide glow-text`}
        >
          Applications
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-mono text-gray-400 max-w-xs md:max-w-2xl leading-relaxed">
          Modulaires, améliorations progressives et architecture Serverless...
        </p>
      </div>

      {/* Section Ballpit */}
      <div className="aspect-video w-full max-w-xs md:max-w-2xl lg:max-w-4xl relative my-4 md:my-8">
        <h1
          className={`${bangers.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl lg:text-8xl tracking-widest font-bold text-slate-950 z-10 uppercase p-px rounded-b-lg`}
        >
          Fysalidev
        </h1>
        <Ballpit
          className="rounded-b-4xl"
          gravity={1}
          count={395}
          followCursor={false}
          colors={["#FFFFFF", "#F5F5F5", "#FFFFF0"]}
          friction={0.95}
          wallbounce={0.5}
        />
      </div>

      {/* Section Logos */}
      <div className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl">
        <LogoLoop
          logos={techLogos}
          speed={20}
          direction="left"
          logoHeight={32}
          gap={20}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
