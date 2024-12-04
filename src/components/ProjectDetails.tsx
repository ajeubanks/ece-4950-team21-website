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
  images,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Switch to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Switch to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Automatic image change every 5 seconds
  useEffect(() => {
    if (images.length > 0) {
      const timer = setTimeout(nextImage, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentImage, images.length]);

  return (
    <section className="mb-12 flex flex-col items-center">
      {/* Centered project title */}
      <h2 className="text-4xl font-semibold mb-6 text-center">{projectTitle}</h2>

      {/* Render slideshow only if images exist */}
      {images.length > 0 ? (
        <>
          <div className="relative mb-4 w-full xl:w-3/4 lg:w-3/4 h-64 md:h-96 bg-white overflow-hidden rounded-md shadow-lg border border-gray-300 dark:border-gray-600">
            <div className="relative w-full h-full">
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
                  />
                </div>
              ))}

              {/* Previous and Next Controls */}
              {images.length > 1 && (
                <>
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
                </>
              )}
            </div>
          </div>

          {/* Progress Indicator centered below the image */}
          {images.length > 1 && (
            <div className="w-full xl:w-3/4 lg:w-3/4 flex justify-center space-x-2 mt-4 mb-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentImage ? "bg-orange" : "bg-zinc-600"
                  }`}
                ></span>
              ))}
            </div>
          )}
        </>
      ) : (
        <span />
      )}

      {/* Buttons for Project Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:w-3/4 lg:w-3/4 sm:w-full">
        <a
          href={descriptionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-purple dark:bg-dark text-zinc-100 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-300 group shadow-lg border border-gray-800 dark:border-white dark:border-opacity-40 hover:bg-purple-darker hover:dark:bg-zinc-900 dark:hover:border-white"
        >
          <FaFileAlt className="mr-2 z-10" />
          <span className="z-10">Project Description</span>
        </a>
        <a
          href={reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-purple dark:bg-dark text-zinc-100 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-300 group shadow-lg border border-gray-800 dark:border-white dark:border-opacity-40 hover:bg-purple-darker hover:dark:bg-zinc-900 dark:hover:border-white"
        >
          <FaFilePdf className="mr-2 z-10" />
          <span className="z-10">Project Report</span>
        </a>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-purple dark:bg-dark text-zinc-100 dark:text-zinc-100 py-4 px-6 rounded-md text-center text-lg flex justify-center items-center overflow-hidden transition-all duration-300 group shadow-lg border border-gray-800 dark:border-white dark:border-opacity-40 hover:bg-purple-darker hover:dark:bg-zinc-900 dark:hover:border-white"
        >
          {docsLink.includes("Customer") ? (
            <FaFileAlt className="mr-2 z-10" />
          ) : (
            <FaLink className="mr-2 z-10" />
          )}
          <span className="z-10">
            {docsLink.includes("Customer") ? "Customer Reqs." : "Supporting Docs"}
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
