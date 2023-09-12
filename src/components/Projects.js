import React from "react";

export default function Projects(props) {
    return (
        <div className="row">
        {props.projects.map(props => (
          <a href="" className="card shadow-lg col-5 m-5 p-2 text-decoration-none">
            <div className="card-body">
              <img className="img-fluid rounded" src={props.image}></img>
              <h3 className="list-group-item mt-3" key={props.id}>
                {props.name}
              </h3>
              <hr></hr>
              <p className="list-group-item">{props.description}</p>
              <hr></hr>
              <a href={props.githubURL} target="_blank" class="btn btn-primary mb-2">View on GitHub</a>
            </div>
          </a>
        ))}
        </div>
    );
  }