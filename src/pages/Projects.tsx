import React from 'react';
import ProjectDetails from '../components/ProjectDetails'; // Import the new component

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      {/* Project 1 Section */}
      <ProjectDetails
        projectTitle="Project 1"
        descriptionLink="/path/to/project1-description.pdf"
        reportLink="/path/to/project1-report.pdf"
        docsLink="/path/to/project1-documents"
      />

      {/* Project 2 Section */}
      <ProjectDetails
        projectTitle="Project 2"
        descriptionLink="/path/to/project2-description.pdf"
        reportLink="/path/to/project2-report.pdf"
        docsLink="/path/to/project2-documents"
      />

      {/* Project 3 Section */}
      <ProjectDetails
        projectTitle="Project 3"
        descriptionLink="/path/to/project3-description.pdf"
        reportLink="/path/to/project3-report.pdf"
        docsLink="/path/to/project3-documents"
      />

      {/* Final Project Section */}
      <ProjectDetails
        projectTitle="Final Project"
        descriptionLink="/path/to/final-description.pdf"
        reportLink="/path/to/final-report.pdf"
        docsLink="/path/to/final-documents"
      />
    </div>
  );
};

export default Projects;
