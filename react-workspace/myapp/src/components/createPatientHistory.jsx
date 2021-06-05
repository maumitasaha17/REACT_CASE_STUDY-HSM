import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";

class CreatePatientHistory extends Component {
  state = {
    history: {
      patientHistoryId: "",
      recordedDate: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    PatientHistoryService.addPatientHistory(this.state.history).then((res) => {
      this.props.history.push("/history");
    });
  };
  handleChange = (event) => {
    const history = { ...this.state.history };
    // dynamically handling event changes
    history[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ history });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>

        <div className="mb-3">
            <label htmlFor="patientHistoryId" className="form-label">
              Patient History Id
            </label>
            <input
              type="text"
              className="form-control"
              id="patientHistoryId"
              name="patientHistoryId"
              value={this.state.history.patientHistoryId}
              onChange={this.handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="recordedDate" className="form-label">
              Recorded Date
            </label>
            <input
              type="date"
              className="form-control"
              id="recordedDate"
              name="recordedDate"
              value={this.state.history.recordedDate}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePatientHistory;