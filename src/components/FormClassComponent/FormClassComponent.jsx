import React, { Component } from "react";

class FormClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form in Class Component</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            pattern=".{6,}"
            title="Password must be at least 6 characters long"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormClassComponent;
