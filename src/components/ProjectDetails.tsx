import React from "react";
import { FaFileAlt, FaFilePdf, FaLink } from "react-icons/fa";

interface ProjectDetailsProps {
  projectTitle: string;
  descriptionLink: string;
  reportLink: string;
  docsLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectTitle,
  descriptionLink,
  reportLink,
  docsLink,
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">{projectTitle}</h2>
      <p>Details about {projectTitle}...</p>
      {/* Buttons for the project */}
      <div className="flex space-x-4 mt-4">
        <a
          href={descriptionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple hover:bg-purple text-white py-2 px-4 rounded flex items-center"
        >
          <FaFileAlt className="mr-2" /> Project Description
        </a>
        <a
          href={reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange hover:bg-orange text-white py-2 px-4 rounded flex items-center"
        >
          <FaFilePdf className="mr-2" /> Project Report
        </a>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded flex items-center"
        >
          <FaLink className="mr-2" /> Supporting Docs
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
