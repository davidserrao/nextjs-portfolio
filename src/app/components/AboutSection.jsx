"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import ImageCarousel from './ImageCarousel';

const TAB_DATA = [
    {
        titles: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc font-semibold'>
                <li>JavaScript (React, Next.js)</li>
                <li>Python</li>
                <li>Java</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        titles: "Education",
        id: "education",
        content: (
            <ul className=' font-semibold'>
                <li>Georgia Institute of Technology
                    <ul className='font-light text-sm indent-3'>
                        <li>Atlanta, Georgia</li>
                        <li>B.S. Computer Science</li>
                    </ul>
                </li>
                
            </ul>
        )
    },
    {
        titles: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc font-semibold'>
                <li><a href="https://www.startup.exchange/" target="_blank" className='text-blue-400 hover:underline'>Startup Exchange</a>
                    <ul className='font-light text-sm indent-3'>
                        <li>National Director of Events, Community Growth</li>
                        <li>May 2023 - Present</li>
                    </ul>
                </li>
                <li className='mt-2'><a href="https://www.waterfall.market/" target="_blank" className='text-blue-400 hover:underline'>Waterfall NFT</a>
                    <ul className='font-light text-sm indent-3'>
                        <li>UX/UI Designer</li>
                        <li>September 2023 - December 2023</li>
                    </ul>
                </li>
                <li className='mt-2'><a href="https://www.clarkstonhealth.org/" target="_blank" className='text-blue-400 hover:underline'>
                    Clarkston Community Health Center
                </a>
                    <ul className='font-light text-sm indent-3'>
                        <li>Tech Consultant / UI Designer</li>
                        <li>August 2023 - November 2023</li>
                    </ul>
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    //what does startTransition do?
    //https://reactjs.org/docs/concurrent-mode-reference.html#usetransition

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        })
    }

  return (
    <section className='text-white' id="about">
        <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* <Image src="/images/switz_pic.JPG" width={350} height={350} className="rounded hidden md:block lg:block" alt="mountain-pic"/> */}
            <ImageCarousel />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I’m currently a Computer Science student at Georgia Tech with experience in
                project management, front-end development, and design softwares. I’m seeking internship
                opportunities involving project management, full-stack development,
                and/or AI development to expand my skills in these fields.</p>
                <div className='flex flex-row mt-8 text-lg'>
                <TabButton
                    selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    {" "}Skills{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    {" "}Education{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                    {" "}Experience{" "}
                </TabButton>
                </div>
                <div className='mt-3'>{TAB_DATA.find((t) => t.id === tab).content}</div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection