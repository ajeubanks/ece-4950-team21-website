import React from 'react';
import ProfileCard from '../components/ProfileCard'; // Import the ProfileCard component

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">About the Team</h1>
      <p className="mt-4">
        Meet Team 21 and learn more about our roles and expertise.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center pt-16">
        {/* Profile 1 */}
        <ProfileCard
          imgSrc="/img/ajeubanks.jpg"
          name="Andrew Eubanks"
          major="Computer Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink='/resumes/Andrew Eubanks Resume.docx (1).pdf'
        />
        
        {/* Profile 2 */}
        <ProfileCard
          imgSrc="/path-to-another-profile-pic.jpg"
          name="Eric Mitchell"
          major="Computer Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink='/resumes/Andrew Eubanks Resume.docx (1).pdf'
        />
        
        {/* Profile 3 */}
        <ProfileCard
          imgSrc="/path-to-third-profile-pic.jpg"
          name="Steven Johnson"
          major="Electrical Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink='/resumes/Andrew Eubanks Resume.docx (1).pdf'
        />

        {/* Profile 4 */}
        <ProfileCard
          imgSrc="/path-to-fourth-profile-pic.jpg"
          name="Alvi Topuzi"
          major="Electrical Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink='/resumes/Andrew Eubanks Resume.docx (1).pdf'
        />
        
        {/* Profile 5 */}
        <ProfileCard
          imgSrc="/path-to-fifth-profile-pic.jpg"
          name="Andrew Berkeland"
          major="Electrical Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink='/resumes/Andrew Eubanks Resume.docx (1).pdf'
        />
      </div>
    </div>
  );
};

export default About;
