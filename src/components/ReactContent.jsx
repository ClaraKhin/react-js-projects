import React from "react";
import ReactList from "./ReactList";

const ReactContent = () => {
  return (
    <div className="reactProjects">
      <div className="container">
        <h1>React Js Projects</h1>
        <div className="projectContent">
          {ReactList.map((value, index) => {
            return (
              <div className="projectLists">
                <div key={index}>
                  <img src={value.image} alt={value.name} />
                  <h3>{value.name}</h3>
                  <p>{value.description}</p>
                  <a href={value.link} target="_blank" rel="noreferrer">
                    Click Me!
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ReactContent;
