import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";

class HistoryDetails extends Component {
  state = {
    history: {
      patientHistoryId: "",
      recordedDate: "",
    },
  };
  componentDidMount() {
    PatientHistoryService.findByPatientHistoryId(this.props.match.params.id).then((res) =>
      this.setState({ history: res.data })
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const history = this.state.history;
    history[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ history });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.history);
    PatientHistoryService.updatePatientHistory(
      this.props.match.params.id,
      this.state.history
    ).then((res) => {
      this.props.history.push("/history");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Recorded Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="recordedDate"
              value={this.state.history.recordedDate}
              onChange={this.handleChange}
            />
          </div>
        
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/history");
            }}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default HistoryDetails;