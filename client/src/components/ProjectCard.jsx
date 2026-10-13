import "./Projects.css";

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            {/* show the image if there is one, otherwise a coloured box with the first letter */}
            {project.image ? (
                <img className="project-image" src={project.image} alt={project.title} />
            ) : (
                <div className="project-image project-placeholder">
                    {project.title.charAt(0)}
                </div>
            )}

            <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                    {project.techStack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            View Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;