import React from 'react';
import AboutMe from './components/AboutMe';
// import ProfessionalSkills from './components/ProfessionalSkills';
import { aboutMe, professionalData } from '../data/page-data';
import ProfessionalExp from './components/ProfessionalExp';

const page = () => {
    return (
        <div className="">
            <AboutMe data={aboutMe} />
            <ProfessionalExp data={professionalData} />
            {/* <ProfessionalSkills /> */}
        </div>
    );
};

export default page;
