import React from "react";
import { data } from "../data/data";

export default function Profile() {
  return (
    <>
      <>
      <div className="profile">
        <h2>PROFILE</h2>
          {data.profile.map((val, index) => (
            <>
            {val.profile} <br />
            {val.description}<br />

            </>
          ))}
        </div>
      </>
    </>
  );
}
