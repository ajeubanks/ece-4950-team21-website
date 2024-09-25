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
      {images.length > 0 && (
        <>
          <div className="relative mb-4 w-full xl:w-1/2 lg:w-2/3 h-64 md:h-96 bg-white overflow-hidden rounded-md shadow-lg border border-gray-300 dark:border-gray-600">
            <div className="relative w-full h-full">
              {/* Wrap each image in a div */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}

              {/* Previous and Next Controls */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark text-white p-3 rounded-full hover:text-orange dark:hover:text-orange transition-all duration-500"
                onClick={prevImage}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark text-white p-3 rounded-full hover:text-orange dark:hover:text-orange transition-all duration-500"
                onClick={nextImage}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Progress Indicator centered below the image */}
          <div className="w-full xl:w-1/2 lg:w-2/3 flex justify-center space-x-2 mt-4 mb-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentImage ? "bg-orange" : "bg-zinc-600"
                }`}
              ></span>
            ))}
          </div>
        </>
      )}

      {/* Buttons for Project Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:w-1/2 lg:w-2/3">
        <a
          href={descriptionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-zinc-100 dark:bg-dark text-zinc-800 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-500 group shadow-lg border border-gray-300 dark:border-gray-600 hover:bg-orange hover:text-white dark:hover:bg-orange dark:hover:text-white" 
        >
          <FaFileAlt className="mr-2 z-10" />
          <span className="z-10">Project Description</span>
        </a>
        <a
          href={reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-zinc-100 dark:bg-dark text-zinc-800 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-500 group shadow-lg border border-gray-300 dark:border-gray-600 hover:bg-purple hover:text-white dark:hover:bg-purple dark:hover:text-white"
        >
          <FaFilePdf className="mr-2 z-10" />
          <span className="z-10">Project Report</span>
        </a>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-zinc-100 dark:bg-dark text-zinc-800 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-500 group shadow-lg border border-gray-300 dark:border-gray-600 hover:bg-dark hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black"
        >
          <FaLink className="mr-2 z-10" />
          <span className="z-10">Supporting Docs</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
