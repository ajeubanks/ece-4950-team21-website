import React from 'react';
import ModelViewer from "../components/Model3D";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to Team 21's Project</h1>
      <p className="mt-4">
        Explore our senior design project and learn more about our team.
      </p>

      {/* 3D Model Viewer Section */}
      <div className="mt-8 md:w-3/4 lg:w-3/4 xl:w-3/4 sm:w-full mx-auto"> {/* Align content to 3/4 width and center */}
        <h2 className="text-2xl font-semibold mb-4">Explore Our 3D Model</h2>
        <ModelViewer />
      </div>

      {/* Game Demonstration Section */}
      <div className="mt-12 md:w-3/4 lg:w-3/4 xl:w-3/4 sm:w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Game Demonstration</h2>
        <div className="border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/ovg2Mp3pTvI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full video rounded-md"
            title="Game Demonstration"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;

