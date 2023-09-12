import React from "react";

export default function Projects(props) {
    return (
        <div className="row d-flex justify-content-center">
        {props.projects.map(props => (
          <div className="card shadow-lg col-md-5 m-3">
            <div className="card-body">
              <img className="img-fluid rounded" src={props.image}></img>
              <h3 className="list-group-item mt-3" key={props.id}>
                {props.name}
              </h3>
              <hr></hr>
              <p className="list-group-item">{props.description}</p>
              <hr></hr>
              <a href={props.githubURL} target="_blank" className="custom-button">View on GitHub</a>
            </div>
          </div>
        ))}
        </div>
    );
  }