import React from "react";
import { data } from "../data/data";

export default function Certificate() {
  return (
    <>
      <>
      <div className="certificate">
      <h2>CERTIFICATE</h2>
          {data.certificate.map((val, index) => (
            <>
              {val.date} <br />
              {val.description} <br />
              {val.institution} <br />
              {val.name}
              <br />
            </>
          ))}
          <br />
        </div>
      </>
    </>
  );
}
