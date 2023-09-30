import React from 'react';
import Image from 'next/image';
import { Envelope, Twitter, Linkedin } from '../../icons/';

const Sidebar = ({ data }) => {
    const { name, role, education, contactLinks } = data;
    return (
        <div className="bg-black flex flex-col h-auto content-between w-full lg:h-screen lg:justify-around lg:w-1/3 lg:fixed">
            <div className="text-white flex flex-col items-center p-10">
                <Image
                    priority
                    width={300}
                    height={300}
                    className="rounded-full h-full mb-6"
                    src="/images/cv.jpg"
                    alt="julian-wan-WNoLnJo7tS8-unsplash.jpg"
                    aria-label="julian-wan-WNoLnJo7tS8-unsplash.jpg"
                />
                <div className="text-center">
                    <h1 className="mb-2">{name}</h1>
                    <h2 className="mb-8 ">{role}</h2>
                </div>
                <div className="text-center">
                    {education.map((edu, i) => {
                        return (
                            <p className="mb-2" key={i * 0.25}>
                                {edu}
                            </p>
                        );
                    })}
                </div>
                <div className="text-white my-4 text-center sm:mt-8">
                    <h3 className="mb-2">CONTACT ME</h3>
                    <div className="flex justify-center gap-2">
                        <a
                            href={contactLinks[0]}
                            aria-label="email link"
                            className="socialIcon"
                            target="_blank"
                        >
                            <Envelope />
                        </a>
                        <a
                            href={contactLinks[1]}
                            aria-label="twitter link"
                            className="socialIcon"
                            target="_blank"
                        >
                            <Twitter />
                        </a>
                        <a
                            href={contactLinks[2]}
                            aria-label="linkedin link"
                            className="socialIcon"
                            target="_blank"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
