import React, { useState } from "react";
import { FaLinkedin, FaFilePdf, FaGoogle } from "react-icons/fa"; // Import icons
import { SiGmail } from "react-icons/si";
import { ImProfile } from "react-icons/im";

interface ProfileCardProps {
  imgSrc: string;
  name: string;
  major: string;
  email: string; // Use email prop for mailto link
  linkedin: string;
  resumeLink: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imgSrc,
  name,
  major,
  email,
  linkedin,
  resumeLink,
}) => {
  const [imgError, setImgError] = useState(false);

  // Function to get initials from the name
  const getInitials = (fullName: string) => {
    const names = fullName.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };
  return (
    <div className="w-32 sm:w-40 lg:w-44 xl:w-56 text-center">
      {/* Profile Picture with Orange Border */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 xl:w-56 xl:h-56 rounded-full overflow-hidden bg-transparent border-2 border-orange mx-auto flex items-center justify-center">
        {imgError ? (
            // Display initials if image is broken or not found
            <span className="text-4xl font-bold text-gray-600">
              {getInitials(name)}
            </span>
          ) : (
            <img
              src={imgSrc}
              alt={`${name}'s Profile`}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)} // Handle image load error
            />
          )}
      </div>

      {/* Text: Name, Major */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-semibold">
          {name}
        </h3>
        <p className="text-gray-600">{major}</p>
      </div>

      {/* Social Media Icons and Resume */}
      <div className="flex justify-center mt-4 space-x-4">
        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300"
        >
          <FaLinkedin
            className="text-gray-600 hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer"
            size={24}
          />
        </a>

        {/* Gmail Link */}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300"
        >
          <SiGmail
            className="text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
            size={24}
          />
        </a>

        {/* Resume */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300"
        >
          <ImProfile
            className="text-gray-600 hover:text-purple hover:scale-110 transition-all duration-300 cursor-pointer"
            size={24}
          />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
