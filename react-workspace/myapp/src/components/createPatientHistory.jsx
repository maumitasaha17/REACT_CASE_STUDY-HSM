import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";

class CreatePatientHistory extends Component {
  state = {
    history: {
      patientHistoryId: "",
      patientId: "",
      patientName: "",
      DietType: "",
      diseaseName: "",
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
            <label htmlFor="patientId" className="form-label">
            Patient ID
            </label>
            <input
              type="text"
              className="form-control"
              id="patientId"
              name="patientId"
              value={this.state.history.patientId}
              onChange={this.handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
            Patient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              name="patientName"
              value={this.state.history.patientName}
              onChange={this.handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">
            Disease Name
            </label>
            <input
              type="text"
              className="form-control"
              id="diseaseName"
              name="diseaseName"
              value={this.state.history.diseaseName}
              onChange={this.handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="dietType" className="form-label">
            Diet type
            </label>
            <input
              type="text"
              className="form-control"
              id="dietType"
              name="dietType"
              value={this.state.history.dietType}
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