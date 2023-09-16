"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title:"Buzz Cafe",
        description:"VR Cafe game that won the Digital Track 1st place prize for Hexlab's 2023 Horizons hackathon!",
        image:"/images/project-images/buzzcafe.jpeg",
        tag: ["All", "Coding"],
        linkURL: "https://devpost.com/software/buzzcafe"
    },
    {
        id: 2,
        title:"Tonify",
        description:"Tonify is a guitar-tone recognition app that uses machine learning. I created the app's UI in Figma.",
        image:"/images/project-images/TonifyThumbnail.png",
        tag: ["All", "Design"],
        linkURL: "https://www.figma.com/community/file/1242887881505999815"
    },
    {
        id: 3,
        title:"PlantStop",
        description:"Figma mockup for an online ecommerce website that sells all types of house plants.",
        image:"/images/project-images/PlantStop-Thumbnail.png",
        tag: ["All", "Design"],
        linkURL: "https://www.figma.com/community/file/1243098972195096824"
    }
] 

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }
    
    const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag));

  return (
    <section id="projects">
        <h2 className='text-center text-3xl font-bold text-white mb-4'>My Projects</h2>

        <div className='flex flex-row justify-center items-center gap-2 py-4'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag==="All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Coding" 
                isSelected={tag==="Coding"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Design" 
                isSelected={tag==="Design"} 
            />
        </div>

        <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-6'>
            {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgURL={project.image}
                linkURL={project.linkURL}
            />))}
        </div>
    </section>
  )
}

export default ProjectSection