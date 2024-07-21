import React from "react";
import dayjs from "dayjs";

function JobCard() {
  const skills = ["JavaScript", "React", "Nodejs","backend"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2024-07-10", "days");

  return (
    <div className="mx-40 mb-4">

    {/* JobCard_1 */}
      <div className="flex justify-between item-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hovel:scale-103 mb-3">
      
        {/* Frist Div */}
        <div className="flex flex-col items-start gap-3">
        <h1 className="text-lg font-semibold">Front-End Developer - Jupitech Techno </h1>
        <p>Full Time &#x2022;  Fresher &#x2022; In-Office &#x2022; Indore</p>

        <div className="flex items-center gap-2">
          {skills?.map((skill) => (
              <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
            ))}

        </div>
        </div>
        {/* End of Frist Div */}



      {/* Second Div */}
        <div className=" flex items-center gap-4">
        <p className="text-gray-500">Posted : {diffInDays} Days ago.</p>
        <a href=""><button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button></a>
        </div>
        {/* End of Second Div */}
      </div>
          
    {/* JobCard_1 */}
      <div className="flex justify-between item-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hovel:scale-103 mb-3">    
      {/* Frist Div */}
      <div className="flex flex-col items-start gap-3">
      <h1 className="text-lg font-semibold">Back-End Developer - Jupitech Techno </h1>
      <p>Full Time &#x2022;  Fresher &#x2022; In-Office &#x2022; Indore</p>

      <div className="flex items-center gap-2">
        {skills?.map((skill) => (
            <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
          ))}

      </div>
      </div>
      {/* End of Frist Div */}



    {/* Second Div */}
      <div className=" flex items-center gap-4">
      <p className="text-gray-500">Posted : {diffInDays} Days ago.</p>
      <a href=""><button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button></a>
      </div>
      {/* End of Second Div */}
      </div>

    </div>
  );
}

export default JobCard;
