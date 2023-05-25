'use client';
import React from 'react';
import { useState } from 'react';

const Skills = ({ data }) => {
    const [activeTab, setActiveTab] = useState('soft');
    const setBg = (active) => (activeTab === active ? 'bg-yellow' : 'bg-grey');
    const setTabAssignment = (active) =>
        active === 'soft' ? 'text-left' : 'text-right';
    const tabs = (
        <div className="flex rounded-md border-solid border-grey-light border-2 drop-shadow-md">
            {['soft', 'hard'].map((el, i) => {
                return (
                    <button
                        key={el}
                        type="button"
                        className={`btn ${setBg(el)} ${setTabAssignment(el)}`}
                        onClick={() => setActiveTab(el)}
                    >
                        {el} Skills
                    </button>
                );
            })}
        </div>
    );
    const content = (
        <ul
            className={`flex flex-wrap content-start list-none py-4 gap-2 ${
                activeTab === 'soft' ? 'justify-start' : 'justify-end'
            }`}
        >
            {data[activeTab].map((el) => {
                const { icon, text } = el;
                return (
                    <li className="skill">
                        <span>{icon}</span>
                        {text}
                    </li>
                );
            })}
        </ul>
    );
    return (
        <div>
            {tabs}
            {content}
        </div>
    );
};

export default Skills;
