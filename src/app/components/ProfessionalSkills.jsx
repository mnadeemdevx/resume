import React from 'react';

const ProfessionalSkills = ({ data }) => {
    const { title, experiences } = data;
    return (
        <section>
            <h2>{title}</h2>
            <div>
                {experiences?.map(({ role, description, current }, i) => {
                    return (
                        <div key={i}>
                            <h3>{role}</h3>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProfessionalSkills;
