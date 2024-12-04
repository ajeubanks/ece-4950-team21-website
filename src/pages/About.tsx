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
          imgSrc={`${import.meta.env.BASE_URL}img/aj_profile.jpg`}
          name="Andrew Eubanks"
          major="Computer Engineering"
          email='aeubanks322@gmail.com'
          linkedin='https://www.linkedin.com/in/andrew-eubanks-9a5687322/'
          resumeLink={`${import.meta.env.BASE_URL}resumes/Andrew Eubanks Resume.docx (1).pdf`}
        />
        
        {/* Profile 2 */}
        <ProfileCard
          imgSrc={`${import.meta.env.BASE_URL}img/Eric_Profile_Picture.JPG`}
          name="Eric Mitchell"
          major="Computer Engineering"
          email='elmitch@g.clemson.edu'
          linkedin='https://www.linkedin.com/in/eric-mitchell-771b2714a/'
          resumeLink={`${import.meta.env.BASE_URL}resumes/Eric Mitchell Resume.pdf`}
        />
        
        {/* Profile 3 */}
        <ProfileCard
          imgSrc={`${import.meta.env.BASE_URL}img/placeholder.jpg`}
          name="Steven Johnson"
          major="Electrical Engineering"
          email='sjohn27@g.clemson.edu'
          linkedin='https://www.linkedin.com/in/steven-a-johnson-1147c/'
          resumeLink={`${import.meta.env.BASE_URL}resumes/Andrew Eubanks Resume.docx (1).pdf`}
        />

        {/* Profile 4 */}
        <ProfileCard
          imgSrc={`${import.meta.env.BASE_URL}img/alvi.jpg`}
          name="Alvi Topuzi"
          major="Electrical Engineering"
          email='atopuzi@g.clemson.edu'
          linkedin='https://www.linkedin.com/in/alvi-topuzi/'
          resumeLink={`${import.meta.env.BASE_URL}resumes/Alvi_Topuzi.pdf`}
        />
        
        {/* Profile 5 */}
        <ProfileCard
          imgSrc={`${import.meta.env.BASE_URL}img/IMG_6877.JPG`}
          name="Andrew Berkeland"
          major="Electrical Engineering"
          email='aberkel@g.clemson.edu'
          linkedin='https://www.linkedin.com/in/placeholder/'
          resumeLink={`${import.meta.env.BASE_URL}resumes/Andrew Eubanks Resume.docx (1).pdf`}
        />
      </div>
    </div>
  );
};

export default About;
