import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Full Stack Web Development",
        description:
            "Promotional landing pages for physical and digital products, including TuneTies app developed alongside other Stanford students.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS",],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/"],
        github: "https://fishermenswives.netlify.app/#contact",
        demo: "https://hci.stanford.edu/courses/cs147/2023/au/projects/HarmoniousTies/TuneTies/",
        image: "/projects/portfolio1.png",
        available: true,
    },
    {
        id: 1,
        name: "Machine Learning",
        description:
            "Predicting outcomes using POMDP framework (Stanford Intelligent Systems Lab) and Mitigating Bias in AI",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "https://github.com/graciellya/SISLSum23Research",
        demo: "https://drive.google.com/file/d/1FO2katJc4AiYAQA88WaIGWGt62h6vUuC/view?usp=sharing",
        image: "/projects/dataset-card.jpg",
        available: true,
    },
    {
        id: 2,
        name: "UI/UX Design + Game Development",
        description:
            "Including Figma designs for TuneTies app and UI/UX design for online games",
        technologies: [],
        techNames: ["Figma"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://docs.google.com/document/d/19uu-A7qWfeE6YF38lTZz4MKPKDkBEPc6rW4L1NaLHPU/edit?usp=sharing",
        demo: "https://drive.google.com/file/d/1s6H3Xu8cXF2ri0LyLMiKVZMxFmcPOqTp/view?usp=share_link",
        image: "/projects/Untitled design-19.png",
        available: true,
    },
        {
        id: 3,
        name: "Product Management",
        description:
            "PRDs, user stories, and product roadmaps",
        technologies: [],
        techNames: [],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://drive.google.com/file/d/1SH75mbaM-lzksTWnCG0qdjAg3kIQFBlI/view?usp=sharing",
        demo: "https://drive.google.com/file/d/1Dj7ARcR4hpbzy7nP6MkoB_afn8fb_Tsk/view?usp=share_link",
        image: "/projects/screenshot.png",
        available: true,
    },
  
];
