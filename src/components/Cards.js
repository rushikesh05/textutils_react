import React from "react";

export default function Cards(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    

  return (
    <div className="container my-3" style={myStyle}>
      <div className="card text-center" style={myStyle}>
        <div className="card-header" style={myStyle}>
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title" style={myStyle}>
            Special title treatment
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary" style={myStyle}>
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-body-secondary" style={myStyle}>
          2 days ago
        </div>
      </div>
      <div className="container my-2">
        <div
          className="progress"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-success "
            style={{ width: "25%" }}
          ></div>
        </div>
        <div
          className="progress my-2"
          role="progressbar"
          aria-label="Info example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
        </div>
        <div
          className="progress my-2"
          role="progressbar"
          aria-label="Warning example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning "
            style={{ width: "75%" }}
          ></div>
        </div>
        <div
          className="progress my-2"
          role="progressbar"
          aria-label="Danger example"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-danger"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
