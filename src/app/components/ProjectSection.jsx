"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title:"SocialSpark",
        description:"Social skills training (SST) mobile app which generates personalized advice to help users initiate/maintain conversations.",
        skills:"Python, REST API’s (FastAPI), SQL (MySQL), LLM Prompt Engineering, SwiftUI",
        image:"/images/project-images/SocialSparksThumbnail.png",
        tag: ["All", "Coding"],
        linkURL: "https://devpost.com/software/socialspark-age5uf"
    },
    {
        id: 2,
        title:"Buzz Cafe",
        description:"VR Cafe game that won the Digital Track 1st place prize for Hexlab's 2023 Horizons hackathon!",
        skills:"C#, Unity, Blender, Project Management",
        image:"/images/project-images/buzzcafe.jpeg",
        tag: ["All", "Coding"],
        linkURL: "https://devpost.com/software/buzzcafe"
    },
    {
        id: 3,
        title:"Rewind",
        description:"SMS-based microjournaling app with entry data visualizations",
        skills:"Python, AI Text Embeddings, Data Visualization, Flask, MongoDB, React, JavaScript",
        image:"/images/project-images/rewind.png",
        tag: ["All", "Coding"],
        linkURL: "https://github.com/vkodithala/rewind-backend"
    },
    {
        id: 4,
        title:"Debugger",
        description:"Videogame project for LMC 2700. Worked on Unity development, game assets, and soundtrack.",
        skills:"C#, Unity, Digital Art, Logic X Pro",
        image:"images/project-images/Debugger.png",
        tag: ["All", "Design"],
        linkURL: "https://conatordev.itch.io/debugger"
    },
    {
        id: 5,
        title:"Tonify",
        description:"Tonify is a guitar-tone recognition app that uses machine learning. I created the app's UI in Figma.",
        skills:"Figma, UX Design",
        image:"/images/project-images/TonifyThumbnail.png",
        tag: ["All", "Design"],
        linkURL: "https://www.figma.com/community/file/1242887881505999815"
    },
    {
        id: 6,
        title:"PlantStop",
        description:"Figma mockup for an online ecommerce website that sells all types of house plants.",
        skills:"Figma, UX Design",
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
                skills={project.skills} 
                imgURL={project.image}
                linkURL={project.linkURL}
            />))}
        </div>
    </section>
  )
}

export default ProjectSection