import React from "react";
import { data } from "../data/data";

export default function Experience() {
  return (
    <>
      <div className="experience">
        {data.experience.map((val, index) => (
          <>
            <h2>EXPERIENCE</h2>
            {val.company} <br />
            {val.endDate} <br />
            {val.jobDescription} <br />
            {val.jobTitle} <br />
            {val.startDate}
            <br />
          </>
        ))}
        <br />
      </div>
    </>
  );
}
