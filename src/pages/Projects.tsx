import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      {/* Project 1 Section */}
      <section id="project1" className="mb-12">
        <ProjectDetails
          projectTitle="Project 1"
          descriptionLink={`${import.meta.env.BASE_URL}project1/ECE 4950 Project 1 Fall 2024.pdf`}
          reportLink={`${import.meta.env.BASE_URL}project1/Project 1 Report.pdf`}
          docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/lab1"
          images={[
            `${import.meta.env.BASE_URL}img/project1_part1.png`,
            `${import.meta.env.BASE_URL}img/project1_part2.png`,
            `${import.meta.env.BASE_URL}img/project1_part3.png`,
          ]}
        />
      </section>

      {/* Project 2 Section */}
      <section id="project2" className="mb-12">
        <ProjectDetails
          projectTitle="Project 2"
          descriptionLink={`${import.meta.env.BASE_URL}project2/ECE 4950 Project 2 Fall 2024.pdf`}
          reportLink={`${import.meta.env.BASE_URL}project2/Project 2 Report - Team 21.pdf`}
          docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/Project2"
          images={[
            `${import.meta.env.BASE_URL}img/project2_demo.png`,
          ]}
        />
      </section>

      {/* Project 3 Section */}
      <section id="project3" className="mb-12">
        <ProjectDetails
          projectTitle="Project 3"
          descriptionLink="/path/to/project3-description.pdf"
          reportLink="/path/to/project3-report.pdf"
          docsLink="/path/to/project3-documents"
          images={[]}
        />
      </section>

      {/* Final Project Section */}
      <section id="finalProject" className="mb-12">
        <ProjectDetails
          projectTitle="Final Project"
          descriptionLink="/path/to/final-description.pdf"
          reportLink="/path/to/final-report.pdf"
          docsLink="/path/to/final-documents"
          images={[]}
        />
      </section>
    </div>
  );
};

export default Projects;
