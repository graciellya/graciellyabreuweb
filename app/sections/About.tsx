import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1300.8px]">
                <div className="flex w-full flex-col lg:flex-row lg:gap-20 lg:items-center">
                    {/* Left column - Text content */}
                    <div className="flex w-full flex-col lg:max-w-[1200px]">
                        <AnimatedTitle
                            text={
                                "Hi! I'm Gracielly,             a student studying Computer Science at Stanford University."
                            }
                            className={
                                "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                            }
                            wordSpace={"mr-[14px]"}
                            charSpace={"mr-[0.001em]"}
                        />

                        <div className="mb-10 flex flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[18px]">
                            <AnimatedBody
                                delay={0.1}
                                text="I'm a senior at Stanford University majoring in Computer Science. I'm passionate about full stack web development and product management, with hands-on experience across a range of CS domains. I'm proficient in C++, Python, JavaScript, HTML, and CSS, and currently honing my skills as a full stack development intern at Empower. I'm driven by building user-focused products and turning ideas into scalable software solutions."
                            />
                        </div>

                       
                </div>

                {/* Right column - Image */}
                <div className="flex w-full justify-center lg:w-1/2 mt-10 lg:mt-0">
                    <div className="relative">
                        <img 
                            src="/projects/me2.png" 
                            alt="Gracielly Abreu"
                            className="rounded-lg shadow-xl max-w-[600px] w-full"
                        />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;
