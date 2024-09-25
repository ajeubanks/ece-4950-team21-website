import React, { useState, useEffect } from "react";
import { FaFileAlt, FaFilePdf, FaLink, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProjectDetailsProps {
  projectTitle: string;
  descriptionLink: string;
  reportLink: string;
  docsLink: string;
  images: string[]; // Array of image URLs
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectTitle,
  descriptionLink,
  reportLink,
  docsLink,
  images
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to switch to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to switch to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Automatic image change every 5 seconds
  useEffect(() => {
    const timer = setTimeout(nextImage, 5000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-semibold mb-6">{projectTitle}</h2>
      
      {/* Slideshow */}
      <div className="relative mb-8 w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-md">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${currentImage * -100}%)` }}
        />
        {/* Previous and Next Controls */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 p-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-10 rounded-full ${index === currentImage ? 'bg-orange-500' : 'bg-gray-500'}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Buttons for Project Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href={descriptionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-md text-center text-lg flex justify-center items-center"
        >
          <FaFileAlt className="mr-2" /> Project Description
        </a>
        <a
          href={reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-md text-center text-lg flex justify-center items-center"
        >
          <FaFilePdf className="mr-2" /> Project Report
        </a>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-md text-center text-lg flex justify-center items-center"
        >
          <FaLink className="mr-2" /> Supporting Docs
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
