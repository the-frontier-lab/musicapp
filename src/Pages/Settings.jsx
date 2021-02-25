import React from "react";
import "./settings.css";
import Form from "./components/form.jsx"
import React from "react";
import Joi from "joi-browser";

class SettingsForm extends Form {
  state = {
    data: { name:"", email:"", username: "", password: "" },
    instruments:[],
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>This is the setting page</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "E-mail")}
          {this.renderInput("username", "Userame")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("instrumentId", "Instrument", this.state.instruments)}
          {this.renderButton("Save Changes")}
        </form>
      </div>
    );
  }
}

export default SettingsForm;
