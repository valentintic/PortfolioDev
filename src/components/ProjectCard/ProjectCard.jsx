import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce",
      description: "Plataforma de ventas online",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      code: "#"
    }
    // Más proyectos...
  ]

  return (
    <div className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects