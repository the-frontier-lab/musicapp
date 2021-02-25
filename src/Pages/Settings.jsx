import React from "react";
import "./settings.css";
import Form from "../components/form.jsx"
import Joi from "joi-browser";
import { getProfile, saveProfile} from "../services/fakeUserProfileService.js";
import { getInstruments } from "../services/instrumentGeneratorService";

class SettingsForm extends Form {
  state = {
    data: { name:"", email:"", username: "", password: "", instrumentId:"" },
    instruments:[],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Name"),
      email: Joi.string()
      .required()
      .label("Email"),
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
      instrumentId: Joi.string()
      .required()
      .label("Instrument"),

  };

  componentDidMount() {
    const instruments = getInstruments();
    this.setState({ instruments });

    const profileId = "5b21ca3eeb7f6fbccd471815"//this.props.match.params.id;
    //if (profileId === "new") return;

    const profile = getProfile(profileId);
    if (!profile) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(profile) });
  }

  mapToViewModel(profile) {
    return {
      _id: profile._id,
      name: profile.name,
      email: profile.email,
      instrumentId: profile.instrument._id,
      username: profile.username,
      password: profile.password
    };
  }


  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div class="container">
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
