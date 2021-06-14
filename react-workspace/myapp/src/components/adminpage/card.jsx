import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <div>
        <div className="card m-1 " style={{ width: " 18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <Link to="/list" class="btn btn-primary">
              More info
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;