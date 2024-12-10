import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Projects Heading */}
      <h1 className="text-4xl font-bold mb-8">Projects</h1> {/* Left-aligned heading */}

      {/* Centered content */}
      <div className="flex flex-col items-center w-full">
        {/* Project 1 Section */}
        <section id="project1" className="mb-12 w-3/4">
          <ProjectDetails
            projectTitle="Project 1"
            descriptionLink={`${import.meta.env.BASE_URL}project1/ECE 4950 Project 1 Fall 2024.pdf`}
            reportLink={`${import.meta.env.BASE_URL}project1/Project 1 Report.pdf`}
            docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/Project1"
            images={[
              `${import.meta.env.BASE_URL}img/project1_part1.png`,
              `${import.meta.env.BASE_URL}img/project1_part2.png`,
              `${import.meta.env.BASE_URL}img/project1_part3.png`,
            ]}
          />
        </section>

        {/* Project 2 Section */}
        <section id="project2" className="mb-12 w-3/4">
          <ProjectDetails
            projectTitle="Project 2"
            descriptionLink={`${import.meta.env.BASE_URL}project2/ECE 4950 Project 2 Fall 2024.pdf`}
            reportLink={`${import.meta.env.BASE_URL}project2/Project 2 Report - Team 21.pdf`}
            docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/Project2"
            images={[`${import.meta.env.BASE_URL}img/project2_demo.png`]}
          />
        </section>

        {/* Project 3 Section */}
        <section id="project3" className="mb-12 w-3/4">
          <ProjectDetails
            projectTitle="Project 3"
            descriptionLink={`${import.meta.env.BASE_URL}project3/ECE 4950 Project 3 Fall 2024.pdf`}
            reportLink={`${import.meta.env.BASE_URL}project3/Project 3 Report - Team 21.pdf`}
            docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/Project3"
            images={[
              `${import.meta.env.BASE_URL}img/HardwarePicture.jpg`,
              `${import.meta.env.BASE_URL}img/UI Image.png`,
            ]}
          />
        </section>

        {/* Final Project Section */}
        <section id="finalProject" className="mb-12 w-3/4">
          <ProjectDetails
            projectTitle="Final Project"
            descriptionLink={`${import.meta.env.BASE_URL}project4/ECE 4950 Project 4 Fall 2024.pdf`}
            reportLink={`${import.meta.env.BASE_URL}project4/Team 21 - ECE 4950 Project 4 Fall 2024.pdf`}
            docsLink="https://github.com/sjohn1147/ECE-4950/tree/main/Project4"
            images={[
              `${import.meta.env.BASE_URL}img/IMG_6873.jpg`,
              `${import.meta.env.BASE_URL}img/IMG_6872.jpg`,
              `${import.meta.env.BASE_URL}img/game_menu.png`,
              `${import.meta.env.BASE_URL}img/game_ui.png`,
              `${import.meta.env.BASE_URL}img/simulink.png`,
              `${import.meta.env.BASE_URL}img/image_recognition.png`
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default Projects;
