import React, { useState } from 'react';


function SearchBar() {
    const [jobRole, setJobRole] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [experience, setExperience] = useState('');

    const handleSearch = () => {
        // Handle the search functionality here
        console.log({ jobRole, jobType, jobLocation, experience });
    };

    return (
        <div className="flex gap-4 my-10 justify-center px-10">
            <select 
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
                defaultValue=""
            >
                <option value="" disabled hidden>Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Flutter Developer">Flutter Developer</option>
            </select>

            <select 
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
                defaultValue=""
            >
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>

            <select 
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
                defaultValue=""
            >
                <option value="" disabled hidden>Job Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <select 
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
                defaultValue=""
            >
                <option value="" disabled hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>

            <button 
                onClick={handleSearch}
                className="w-40 bg-blue-800 text-white font-bold py-3 rounded-md"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
