import React, { Component } from "react";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", job: "" };
    this.handleChange = this.handleChange.bind(this);
    
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.name);
    console.log(this.job);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h4>Name Job</h4>
          <hr />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="job">job</label>
          <input
            name="job"
            placeholder="job"
            value={this.state.job}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
          <hr />
        </div>
       
      </form>
    );
  }
}
export default Employee;
