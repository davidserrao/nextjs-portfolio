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
            <div className='flex flex-row'>
                <div className='basis-1/3'>
                    <p className='font-semibold text-decoration-line: underline'>Languages</p>
                    <ul className='list-disc'>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className='basis-1/3'>
                    <p className='font-semibold	text-decoration-line: underline'>Technologies</p>
                    <ul className='list-disc'>
                        <li>React</li>
                        <li>Git</li>
                        <li>REST API's</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='basis-1/3'>
                    <p className='font-semibold	text-decoration-line: underline'>Other</p>
                    <ul className='list-disc'>
                        <li>UX/UI Design</li>
                        <li>Data Analysis</li>
                        <li>Figma</li>
                        <li>Microsoft Office Suite</li>
                        <li>Project Management</li>
                        <li>Team Leadership</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        titles: "Education",
        id: "education",
        content: (
            <div className='flex flex-row'>
                <div className='flex-auto'>
                    <p className=' font-semibold'> Georgia Institute of Technology </p>
                    <ul className='font-light text-sm'>
                        <li>Atlanta, Georgia</li>
                        <li>B.S. Computer Science</li>
                        <li>Minor in Economics</li>
                    </ul>
                </div>
                <div className='flex-auto'>
                    <p className= 'font-semibold'>Honors:</p>
                    <ul className='font-light text-sm'>
                        <li>Faculty Honor's</li>
                        <li>Dean's List</li>
                        <li>Zell Miller Scholarship</li>
                    </ul>   
                </div>
            </div>
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
                        <li>Assistant Project Manager</li>
                        <li>September 2023 - December 2023</li>
                    </ul>
                </li>
                <li className='mt-2'><a href="https://www.clarkstonhealth.org/" target="_blank" className='text-blue-400 hover:underline'>
                    Clarkston Community Health Center
                </a>
                    <ul className='font-light text-sm indent-3'>
                        <li>Frontend Engineer and UX Consultant</li>
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
                <p className='text-base lg:text-lg'>I’m currently a 3rd year undergraduate at Georgia Tech studying Computer Science and Economics! 🐝</p>
                <br></br>
                <p className='text-base lg:text-lg'>
                I have professional experience in project management, full-stack development, and technology consulting. I'm passionate about using
                the technical skills I've learned to make an positive social impacts, especially in the healthcare and environment sectors. 🌎 
                </p>
                <br></br>
                <p className='text-base lg:text-lg'>
                    In my free time, I love making music, hiking new trails, and 
                    the gym. Reach out anytime if you'd like to jam! 🎸
                </p>
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