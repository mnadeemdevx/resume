import React from 'react';

const ProfessionalExp = ({ data }) => {
    const { title, experiences } = data;
    return (
        <section className="mt-4">
            <h2 className="mb-6">{title}</h2>
            <div className="flex flex-col gap-6">
                {experiences?.map(({ role, description, current }, i) => {
                    return (
                        <div key={i} className="flex flex-col">
                            <span
                                className={`h-2 w-full rounded-tl-md rounded-tr-md drop-shadow-md ${
                                    current ? 'bg-green' : 'bg-black'
                                }`}
                            ></span>
                            <div className="bg-grey-light drop-shadow-md p-6 flex flex-col gap-3 rounded-bl-md rounded-br-md">
                                <h3>{role}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProfessionalExp;
