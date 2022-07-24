import React from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="allExperiences">
          <div className="experienceContainer"></div>
          <div className="experienceContainer"></div>
          <div className="experienceContainer"></div>
        </div>
      </div>
    </>
  );
}
