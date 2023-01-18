import React from "react";
import projects from "../data/projectsData";

const ProjectCard = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-info">Projects</h6>
      </div>
      <div className="card-body">
        {projects.map((project, i) => {
          return (
            <React.Fragment key={i}>
              <h4 className="small font-weight-bold">
                {project.project}{" "}
                <span className="float-right">{project.progress}%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className={`progress-bar ${project.type}`}
                  role="progressbar"
                  style={{
                    width: `${
                      project.progress === "Complete" ? "100" : project.progress
                    }%`,
                  }}
                  aria-valuenow={
                    project.progress === "Complete" ? "100" : project.progress
                  }
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
