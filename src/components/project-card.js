import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={projectUrl} className="project-link">View Project</a>
        </div>
    );
};

export default ProjectCard;