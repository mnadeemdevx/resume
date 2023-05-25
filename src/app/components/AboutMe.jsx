import React, { useId } from 'react';
import Skills from './Skills';
import { skills } from '../../data/page-data';

const AboutMe = ({ data }) => {
    const { title, body } = data;
    const id = useId();
    return (
        <section>
            <h2 className="mb-8">{title}</h2>
            <div className="bg-grey-light drop-shadow-md p-6 mb-8 rounded-md ">
                {body.map((el, i) => (
                    <p key={`${id}_${i}`} className="mb-6">
                        {el}
                    </p>
                ))}
            </div>
            <Skills data={skills} />
        </section>
    );
};

export default AboutMe;
