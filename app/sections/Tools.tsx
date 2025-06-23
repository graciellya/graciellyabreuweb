import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { SiJavascript, SiPython, SiHtml5 } from "react-icons/si";

// Project data structure
const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        icon: <SiJavascript size={40} className="text-yellow-400" />,
        link: "#"
    },
    {
        id: 2,
        title: "Project 2", 
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        icon: <SiPython size={40} className="text-blue-400" />,
        link: "#"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.", 
        icon: <SiHtml5 size={40} className="text-orange-500" />,
        link: "#"
    },
    {
        id: 4,
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        icon: <SiJavascript size={40} className="text-yellow-400" />,
        link: "#"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        icon: <SiJavascript size={40} className="text-yellow-400" />,
        link: "#"
    }
];

const Tools = () => {
    return (
         <div>
            {/* JSX content  */}
        </div>
    )
};

export default Tools;
